import React, { Component } from 'react'
import NewQuiz from "../newquiz/newQuiz";
import AddNewQuiz from "../AddNewQuiz/addNewQuiz";
import MyQuiz from "../myquiz/myQuiz";
import FAQ from "../faq/faq";
import QuizDetail from "../quizDetail/quizDetail";
import FlatButton from 'material-ui/FlatButton';
import history from '../history';
import { Route, Router } from 'react-router-dom';
import { connect } from "react-redux";
import QAAction from "../../store/actions/QAAction";
import AddQuestionDialog from "../questionDialog/addQuestionDialog";
import StudentDashboard from '../studentDashbaord/studentDashboard';
import GetStartedQuiz from "../getStartedQuiz/getStartedQuiz";
import Quiz from '../quiz/quiz'
import Result from '../result/result'
import Report from "../report/report";
import * as firebase from 'firebase'
import StudentResults from '../studentResults/studentResult';
class MainApp extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentWillMount() {
    this.props.getQuiz();
    this.props.getUsers();
    this.props.getResult();
  }
  render() {
    return (
      <div>
        <AddQuestionDialog open={true} />
        {/* <NewQuiz/> */}
        {/* <AddNewQuiz/> */}
        {/* <MyQuiz/> */}
        {/* <FAQ/> */}
        {/* <QuizDetail/> */}

        {/* <FlatButton label="New Quiz" />
        <FlatButton label="Add New Quiz" />
        <FlatButton label="My Quiz" />
        <FlatButton label="Quiz Detail" /> */}

        <Router history={history}>
          <div>
            {/* <Route path='/newquiz' component={NewQuiz}/> */}
            {/* {console.log(this.props.users !== undefined ? this.props.users[firebase.auth().currentUser.uid] : '')}
            {this.props.user !== undefined ? this.props.users[firebase.auth().currentUser.uid].role === 'admin' ?  */}
            <Route exact path='/newquiz' component={NewQuiz} /> 
            {/* : null : null} */}
            <Route exact path='/addnewquiz' component={AddNewQuiz} />
            <Route exact path='/myquiz' component={MyQuiz} />
            <Route exact path='/quizdetail/:quizKey' component={QuizDetail} />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/' component={StudentDashboard} />
            <Route exact path='/getstartedquiz/:quizKey' component={GetStartedQuiz} />
            <Route exact path='/quiz' component={Quiz} />
            <Route exact path='/result' component={Result} />
            <Route exact path='/report' component={Report} />
            <Route exact path='/studentResults' component={StudentResults} />


          </div>
        </Router>



      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.AuthReducer.allUsers
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => { dispatch(QAAction.getUsers()) },
    getQuiz: () => { dispatch(QAAction.getQuiz()) },
    getResult: () => { dispatch(QAAction.getResult()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)