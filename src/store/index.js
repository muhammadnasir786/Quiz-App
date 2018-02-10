import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

//requiring all reducers
import AuthReducer from './reducers/authReducer';
import QAReducer from "../store/reducers/QAReducer";
//requiring all epics
import AuthEpic from './epic/authEpic';
// import QAEPic from './epic/QAEpic';
import QAEpic from './epic/QAEpic';
//combine epic
const rootEpic = combineEpics(
    AuthEpic.createUser,
    AuthEpic.loginUser,
    QAEpic.getUsers,
    QAEpic.getQuiz,
    QAEpic.getQuestion,
    QAEpic.addQuestion,
    QAEpic.updateQuestion,
    QAEpic.deleteQuestion,
    QAEpic.addQuiz,
    QAEpic.deleteQuiz,
    QAEpic.updateQuiz,
    QAEpic.addImg
);
//combine reducers
const rootReducer = combineReducers({
    AuthReducer , QAReducer
})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//creating store
export let store = createStoreWithMiddleware(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
});
