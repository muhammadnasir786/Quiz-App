


export default class QAAction {

    //--------- Epic ------------
    static ADD_IMG = 'ADD_IMG'
    static GET_USERS = 'GET_USERS';
    static GET_QUIZ = 'GET_QUIZ';
    static GET_QUESTION = 'GET_QUESTION'; 

    static ADD_QUIZ = 'ADD_QUIZ';
    static UPDATE_QUIZ = 'UPDATE_QUIZ';
    static DELETE_QUIZ = 'DELETE_QUIZ'

    static ADD_QUESTION = 'ADD_QUESTION';
    static DELETE_QUESTION = 'DELETE_QUESTION';
    static UPDATE_QUESTION = 'UPDATE_QUESTION';


    //------------- For Reducer -------------
    static GET_USER_ADD = 'GET_USER_ADD' ;

    static GET_QUESTION_ADD = 'GET_QUESTION_ADD' ;
    static GET_QUESTION_DELETE = 'GET_QUESTION_DELETE' ;
    static GET_QUESTION_UPDATE = 'GET_QUESTION_UPDATE' ;
    
    static GET_QUIZ_ADD = 'GET_QUIZ_ADD' ;
    static GET_QUIZ_DELETE = 'GET_QUIZ_DELETE' ;
    static GET_QUIZ_UPDATE = 'GET_QUIZ_UPDATE' ;

    // -------- for Epic ----------
    static getUsers = ()=>{
        return{
            type : QAAction.GET_USERS
        }
    }
    static getQuiz = ()=>{
        return {
            type : QAAction.GET_QUIZ
        }
    }

    static addQuiz = (data)=>{
        return {
            type : QAAction.ADD_QUIZ,
            payload : data
        }
    }
    static addImg = (data)=>{
        return {
            type : QAAction.ADD_IMG,
            payload : data
        }
    }
    static addQuestion = (data) => {
        return {
            type : QAAction.ADD_QUESTION,
            payload : data
        }
    }
    static deleteQuestion = (data) => {
        return {
            type : QAAction.DELETE_QUESTION,
            payload : data
        }
    }
    static updateQuestion = (data) => {
        return {
            type : QAAction.UPDATE_QUESTION,
            payload : data
        }
    }
    static deleteQuiz = (data) => {
        return {
            type : QAAction.DELETE_QUIZ,
            payload : data
        }
    }
    static updateQuiz = (data) => {
        return {
            type : QAAction.UPDATE_QUIZ,
            payload : data
        }
    }
    
    // ----------- for Reducer -----
    static getUsersAdd = (data)=>{
        return {
            type : QAAction.GET_USERS,
            payload : data
        }
    }
    static getQuizAdd = (data)=>{
        return {
            type : QAAction.GET_QUIZ_ADD,
            payload : data
        }
    }
    static getQuizDelete = (data)=>{
        return {
            type : QAAction.GET_QUIZ_DELETE,
            payload : data
        }
    }
    static getQuizUpdate = (data)=>{
        return {
            type : QAAction.GET_QUIZ_UPDATE,
            payload : data
        }
    }
    static getQuestionAdd = (data)=>{
        return {
            type : QAAction.GET_QUESTION_ADD,
            payload : data
        }
    }
    static getQuestionDelete = (data)=>{
        return {
            type : QAAction.GET_QUESTION_DELETE,
            payload : data
        }
    }
    static getQuestionUpdate = (data)=>{
        return {
            type : QAAction.GET_QUIZ_UPDATE,
            payload : data
        }
    }




}