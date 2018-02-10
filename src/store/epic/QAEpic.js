

import { Observable } from 'rxjs'
import QAAction from "../actions/QAAction";
import * as firebase from "firebase";

let userRef = firebase.database().ref('/users');
let quizRef = firebase.database().ref('/quizs');
let questionRef = firebase.database().ref('/quizs/questions')

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
                            quizData: s.key
                        })
                    })
                    quizRef.on('child_changed', (s) => {
                        console.log(s.val(), s.key)
                        // alert('child_changed')
                        alert('question add')
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
                    quizRef.push(payload).then(() => {
                        alert('Quiz Created Successfully')
                    })
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
                        alert('Question Created Successfully')
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
                    quizRef.child(`/${payload}/`).set(null)
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
                    quizRef.child(`${payload.key}`).set(payload.quizData)
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
    




}
