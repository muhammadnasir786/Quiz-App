

import { Observable } from 'rxjs'
import QAAction from "../actions/QAAction";
import * as firebase from "firebase";

let userRef = firebase.database().ref('/users');
let quizRef = firebase.database().ref('/quizs');
let questionRef = firebase.database().ref('/quizs/questions')
let resultRef = firebase.database().ref('/result');


export default class QAEpic {

    
    static getUsers = (action$) => {
        return action$.ofType(QAAction.GET_USERS)
            .switchMap(({
                payload
            }) => {
                return new Observable((observer) => {
                    userRef.on('child_added', (s) => {
                        observer.next({
                            type: QAAction.GET_USER_ADD,
                            payload: {
                                key: s.key,
                                userData: s.val()
                            }
                        })
                    })


                }).takeUntil(action$.ofType('LOGOUT'));
            })
    }
    static getQuiz = (action$) => {
        return action$.ofType(QAAction.GET_QUIZ)
            .switchMap(({
                payload
            }) => {
                return new Observable((observer) => {
                    quizRef.on('child_added', (s) => {
                        observer.next({
                            type: QAAction.GET_QUIZ_ADD,
                            payload: {
                                key: s.key,
                                quizData: s.val()
                            }
                        })
                    })
                    quizRef.on('child_removed', (s) => {
                        console.log(s.val(), s.key)
                        observer.next({
                            type: QAAction.GET_QUIZ_DELETE,
                            payload: s.key
                        })
                    })
                    quizRef.on('child_changed', (s) => {
                        console.log(s.val(), s.key)
                        // alert('child_changed')
                        // alert('question add')
                        observer.next({
                            type: QAAction.GET_QUIZ_UPDATE,
                            payload: {
                                key: s.key,
                                quizData: s.val()
                            }
                        })
                    })

                }).takeUntil(action$.ofType('LOGOUT'));
            })
    }
    static getResult = (action$) => {
        return action$.ofType(QAAction.GET_RESULT)
            .switchMap(({
                payload
            }) => {
                return new Observable((observer) => {
                    firebase.database().ref('result/').on('child_added', (s) => {
                        observer.next({
                            type: QAAction.GET_RESULT_ADD,
                            payload: {
                                key: s.key,
                                resultData: s.val()
                            }
                        })
                    })
                }).takeUntil(action$.ofType('LOGOUT'));
            })
    }
    static getQuestion = (action$) => {
        return action$.ofType(QAAction.GET_QUESTION)
            .switchMap(({
                payload
            }) => {
                return new Observable((observer) => {
                    // quizRef.on('child_added', (s) => {
                    //     observer.next({
                    //         type: QAAction.GET_QUESTION_ADD,
                    //         payload: {
                    //             key: s.key,
                    //             questionData: s.val()
                    //         }
                    //     })
                    // })
                    // quizRef.on('child_removed', (s) => {
                    //     console.log(s.val(), s.key)
                    //     observer.next({
                    //         type: QAAction.GET_QUESTION_DELETE,
                    //         questionData: s.key
                    //     })
                    // })
                    // quizRef.on('child_changed', (s) => {
                    //     console.log(s.val(), s.key)
                    //     // alert('child_changed')
                    //     observer.next({
                    //         type: QAAction.GET_QUIZ_UPDATE,
                    //         payload: {
                    //             key: s.key,
                    //             questionData: s.val()
                    //         }
                    //     })
                    // })
                    return null
                }).takeUntil(action$.ofType('LOGOUT'));
            })
    }
    static addQuiz = (action$) => {
        return action$.ofType(QAAction.ADD_QUIZ)
            .switchMap(({
                payload
            }) => {
                // console.log(payload)
                return Observable.fromPromise(
                    quizRef.push().child('description/').set(payload).then(() => {
                        // alert('Quiz Created Successfully')
                    }).catch(()=>{
                        console.log('erre');
                    })
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static addResult = (action$) => {
        return action$.ofType(QAAction.ADD_RESULT)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    firebase.database().ref('result/').push(payload).then(() => {
                        alert('Result  Successfully')
                    }).catch(()=>{
                        console.log('erre');
                    })
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static updateDescription = (action$) => {
        // alert('asnias')
        return action$.ofType(QAAction.UPDATE_DESCRIPTION)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    quizRef.child(`${payload.quizKey}/description/`).set(payload.description)
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static deleteQuiz = (action$) => {
        return action$.ofType(QAAction.DELETE_QUIZ)
            .switchMap(({
                payload
            }) => {
                // console.log('Nasir')
                return Observable.fromPromise(
                    quizRef.child(`/${payload}/`).set(null)
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static updateQuiz = (action$) => {
        // alert('asnias')
        return action$.ofType(QAAction.UPDATE_QUIZ)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    quizRef.child(`${payload.key}`).set(payload.quizData)
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static addQuestion = (action$) => {
        return action$.ofType(QAAction.ADD_QUESTION)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    quizRef.child(`${payload.quizKey}/questions/`).push(payload.questionObj).then(() => {
                        // alert('Question Created Successfully')
                    })
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static deleteQuestion = (action$) => {
        return action$.ofType(QAAction.DELETE_QUESTION)
            .switchMap(({
                payload
            }) => {
                // console.log('Nasir')
                return Observable.fromPromise(
                    quizRef.child(`/${payload.quizKey}/questions/${payload.questionKey}/`).set(null)
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static updateQuestion = (action$) => {
        // alert('asnias')
        return action$.ofType(QAAction.UPDATE_QUESTION)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    quizRef.child(`${payload.quizKey}/questions/${payload.questionKey}/`).set(payload.questionObj)
                )
                    .map((x) => {
                        return {
                            type: null
                        }
                    })
            })
    }
    static addImg = (action$)=>{
        return action$.ofType(QAAction.ADD_IMG)
        .switchMap(({ payload })=>{
            // console.log(payload)
            return Observable.fromPromise(
                firebase.storage().ref(`pictures/${payload.img.name}`).put(payload.img).then((res) => {
                   let quizObj = {
                       ...payload , 
                       img : res.downloadURL
                   }
                   console.log(payload);
                //    console.log(res.downloadURL);
                    // console.log(msg);
                    // this.props.addImg(this.state.img);
                    // console.log(res.downloadURL);
                    return QAAction.addQuiz(quizObj)
                })
            )
            // .map((x)=>{
            //     return { type : null }
            // })
        })
    }
    static isAuthenticateForEdit = (action$)=>{
        return action$.ofType(QAAction.IS_AUTHENTICATE_FOR_EDIT)
        .switchMap(({payload })=>{
            return Observable.fromPromise(
                firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
                .then((res)=>{
                    return {type : QAAction.GET_IS_AUTHENTICATE_FOR_EDIT_ADD }
                }).catch((err)=>{
                    // alert(err.message)
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

// console.log('nASIR');