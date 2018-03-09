


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

    static UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
    static IS_AUTHENTICATE_FOR_EDIT = 'IS_AUTHENTICATE_FOR_EDIT'
    //---------------- For Student -----------

    static ADD_RESULT = 'ADD_RESULT';
    static GET_RESULT = 'GET_RESULT';
    static GET_RESULT_ADD = 'GET_RESULT_ADD';

    static END_QUIZ = 'END_QUIZ';
    static CURRENT_QUESTION = 'CURRENT_QUESTION';
    static UPDATE_SCORE = 'UPDATE_SCORE';
    static SELECTED_QUIZ = 'SELECTED_QUIZ'
    //------------- For Reducer Student  -------------
    static getResult = ()=>{
        return {
            type : QAAction.GET_RESULT
        }
    }
    
    static selectedQuiz = (data)=>{
        return {
            type : QAAction.SELECTED_QUIZ,
            payload : data
        }
    }
    static startQuiz = (data)=>{
        return {
            type : QAAction.START_QUIZ,
            payload : data
        }
    }
    static endQuiz = (data)=>{
        return {
            type : QAAction.END_QUIZ,
            payload : data
        }
    }
    static currentQuestion = (data)=>{
        return {
            type : QAAction.CURRENT_QUESTION,
            payload : data
        }
    }
    static updateScore = (data)=>{
        return {
            type : QAAction.UPDATE_SCORE,
            payload : data
        }
    }
    static addResult = (data)=>{
        return {
            type : QAAction.ADD_RESULT,
            payload : data
        }
    }
    // static getResult = (0)
    //------------- For Reducer -------------

    static GET_IS_AUTHENTICATE_FOR_EDIT_ADD = 'GET_IS_AUTHENTICATE_FOR_EDIT_ADD'
    static GET_USER_ADD = 'GET_USER_ADD';

    static GET_QUESTION_ADD = 'GET_QUESTION_ADD';
    static GET_QUESTION_DELETE = 'GET_QUESTION_DELETE';
    static GET_QUESTION_UPDATE = 'GET_QUESTION_UPDATE';

    static GET_QUIZ_ADD = 'GET_QUIZ_ADD';
    static GET_QUIZ_DELETE = 'GET_QUIZ_DELETE';
    static GET_QUIZ_UPDATE = 'GET_QUIZ_UPDATE';

    // -------- for Epic ----------
    static updateDescription = (data) => {
        return {
            type: QAAction.UPDATE_DESCRIPTION,
            payload: data
        }
    }
    static getUsers = () => {
        return {
            type: QAAction.GET_USERS
        }
    }
    static getQuiz = () => {
        return {
            type: QAAction.GET_QUIZ
        }
    }

    static addQuiz = (data) => {
        return {
            type: QAAction.ADD_QUIZ,
            payload: data
        }
    }
    static addImg = (data) => {
        return {
            type: QAAction.ADD_IMG,
            payload: data
        }
    }
    static addQuestion = (data) => {
        return {
            type: QAAction.ADD_QUESTION,
            payload: data
        }
    }
    static deleteQuestion = (data) => {
        return {
            type: QAAction.DELETE_QUESTION,
            payload: data
        }
    }
    static updateQuestion = (data) => {
        return {
            type: QAAction.UPDATE_QUESTION,
            payload: data
        }
    }
    static deleteQuiz = (data) => {
        return {
            type: QAAction.DELETE_QUIZ,
            payload: data
        }
    }
    static updateQuiz = (data) => {
        return {
            type: QAAction.UPDATE_QUIZ,
            payload: data
        }
    }

    // ----------- for Reducer -----
    static getUsersAdd = (data) => {
        return {
            type: QAAction.GET_USERS,
            payload: data
        }
    }
    static getQuizAdd = (data) => {
        return {
            type: QAAction.GET_QUIZ_ADD,
            payload: data
        }
    }
    static getQuizDelete = (data) => {
        return {
            type: QAAction.GET_QUIZ_DELETE,
            payload: data
        }
    }
    static getQuizUpdate = (data) => {
        return {
            type: QAAction.GET_QUIZ_UPDATE,
            payload: data
        }
    }
    static getQuestionAdd = (data) => {
        return {
            type: QAAction.GET_QUESTION_ADD,
            payload: data
        }
    }
    static getQuestionDelete = (data) => {
        return {
            type: QAAction.GET_QUESTION_DELETE,
            payload: data
        }
    }
    static getQuestionUpdate = (data) => {
        return {
            type: QAAction.GET_QUIZ_UPDATE,
            payload: data
        }
    }




}