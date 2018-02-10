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
class MainApp extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentWillMount(){
    this.props.getQuiz();
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <AddQuestionDialog open={true}/>
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
                  <Route path='/newquiz' component={NewQuiz}/>
                  <Route path='/addnewquiz' component={AddNewQuiz}/>
                  <Route path='/myquiz' component={MyQuiz}/>
                  <Route path='/quizdetail/:quizKey' component={QuizDetail}/>
                  <Route path='/faq' component={FAQ}/>

                </div>
            </Router>



      </div>
    );
  }
}
let mapStateToProps = (state)=>{
  return {

  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
    getUsers : ()=>{ dispatch(QAAction.getUsers())},
    getQuiz : ()=>{ dispatch(QAAction.getQuiz())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)