

import { Observable } from 'rxjs'
import  AuthAction from "../actions/authAction";

import * as firebase from 'firebase';
// Initialize Firebase
let config = {
    apiKey: "AIzaSyDCXSyWAI-vYWnkReBmuTcDrQ7in47BHUE",
    authDomain: "quiz-app-786.firebaseapp.com",
    databaseURL: "https://quiz-app-786.firebaseio.com",
    projectId: "quiz-app-786",
    storageBucket: "quiz-app-786.appspot.com",
    messagingSenderId: "653175294323"
  };
  firebase.initializeApp(config);

const ref = firebase.database().ref('/');
const auth = firebase.auth();
// let userData ;

class AuthEpic {

        static createUser = (action$)=>{
            let userCreated = false;
            return action$.ofType(AuthAction.CREATE_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.createUserWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        ref.child(`users/${res.uid}`).set(payload);
                        userCreated = true;
                        // Action Dispatch for reducer to state change , and component render for 
                        // login OK use flages and dispatch at the bottom .map((x)=>{})
                        alert('User Successfully Created');
                        
                    }).catch((err)=>{
                        console.log(err)
                        alert(err.message)
                        
                    })
                )
                .map((x)=>{
                    return userCreated ? AuthAction.createUserSuccessfully('Naisr') : { type : null}
                })
            })
        }

        static loginUser = (action$)=>{
            let authenticate = false;
            return action$.ofType(AuthAction.LOGIN_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.signInWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        authenticate = true;
                        localStorage.setItem('uid',res.uid)
                        // console.log(res.uid)
                        // send  userdata at the end for reducer
                        // ref.child(`users/${res.uid}/`).once('value',(s)=>{
                        //     console.log(s.val())
                        //     userData = s.val();
                        //     console.log(userData)
                        // });
                        return AuthAction.loginUserSuccessfully()
                    }).catch((err)=>{
                        alert(err.message)
                        return {type : null};
                    })
                )
                // .map((x)=>{
                //     return { type : AuthAction.LOGIN_USER_SUCCESSFULLY }
                //     // return   authenticate ? AuthAction.loginUserSuccessfully(userData) : {type : null}
                // })
            })
        }
}

export default AuthEpic;