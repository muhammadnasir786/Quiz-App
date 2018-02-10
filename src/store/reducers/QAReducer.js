import QAAction from "../actions/QAAction";

let INITIAL_STATE = {
    allQuizs : {},
    allQuestions: {}
}
let QAReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QAAction.GET_QUIZ_ADD:
            let allQuiz = Object.assign({}, state.allQuizs);
            allQuiz[action.payload.key] = action.payload.quizData;
            return { ...state, allQuizs: allQuiz };

        case QAAction.GET_QUIZ_DELETE:
            let allQuizz = Object.assign({}, state.allQuizs);
            delete allQuizz[action.payload];
            return { ...state, allQuizs: allQuizz };

        case QAAction.GET_QUIZ_UPDATE:
            let allQuizzz = Object.assign({}, state.allQuizs);
            allQuizzz[action.payload.key] = action.payload.quizData;
            return { ...state, allQuizs: allQuizzz };
            
        // case QAAction.GET_QUESTION_ADD:
        //     let allQuestions = Object.assign({}, state.allQuestions);
        //     allQuestions[action.payload.key] = action.payload.questionData;
        //     return { ...state, allQuestions : allQuestions };

        // case QAAction.GET_QUESTION_DELETE:
        //     let allQuestionss = Object.assign({}, state.allQuestions);
        //     delete allQuestionss[action.payload];
        //     return { ...state, allQuestions: allQuestionss };

        // case QAAction.GET_QUESTION_UPDATE:
        //     let allQuestionsss = Object.assign({}, state.allQuestions);
        //     allQuestionsss[action.payload.key] = action.payload.questionData;
        //     return { ...state, allQuestions: allQuestionsss };

        default:
            return state;
    }
}
export default QAReducer;