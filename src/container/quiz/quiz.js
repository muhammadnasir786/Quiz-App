import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import QAAction from '../../store/actions/QAAction'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import history from '../history'
import * as firebase from 'firebase'
const styles = {

    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            currentQuestion: 0,
            selectedOpt: ''
        }
        // console.log('Quiz ');
    }
    render() {
        // this.props.allQuizes[this.props.quizKey] !== undefined ?  console.log(Object.keys(this.props.allQuizes[this.props.quizKey].questions)) : null;
        return (this.props.allQuizes[this.props.quizKey] !== undefined ?
            Object.keys(this.props.allQuizes[this.props.quizKey].questions).map((val, i) => {
                let oneQuestion = this.props.allQuizes[this.props.quizKey].questions[val];
                // console.log(oneQuestion);
                if (this.state.currentQuestion === i) {
                    // let questionsData = this.props.allQuizes[this.props.quizKey].questions[val];
                    // console.log(oneQuestion);
                    return <div key={val + 'sd'}>
                        <Card style={{ margin: '30px' }}>
                            <CardTitle style={{}} title={`Question : ${oneQuestion.question} ? `}
                                subtitle=""
                            >
                                <br />
                                <RadioButtonGroup name="shipSpeed"
                                    // defaultSelected={oneQuestion.opt1}
                                    onChange={(e) => { this.setState({ selectedOpt: e.target.value }) }}
                                >
                                    <RadioButton
                                        value={oneQuestion.opt1}
                                        label={oneQuestion.opt1}
                                        style={styles.radioButton}
                                    />
                                    <RadioButton
                                        value={oneQuestion.opt2}
                                        label={oneQuestion.opt2}
                                        style={styles.radioButton}
                                    />
                                    <RadioButton
                                        value={oneQuestion.opt3}
                                        label={oneQuestion.opt3}
                                        style={styles.radioButton}
                                    />
                                </RadioButtonGroup>
                            </CardTitle>

                            <FlatButton label="Next >>" secondary={true}
                                onClick={() => {
                                    // console.log(this.state)
                                    if (oneQuestion.ans === this.state.selectedOpt) {
                                        this.props.updateScore(1)
                                    } else {
                                        this.props.updateScore(0)
                                    }
                                    let questionsLenght = Object.keys(this.props.allQuizes[this.props.quizKey].questions).length
                                    if (questionsLenght === this.state.currentQuestion + 1) {
                                       
                                        history.push('/result');
                                        let result = {
                                            uid: this.props.users[firebase.auth().currentUser.uid].name,
                                            score: this.props.score,
                                            quizKey: this.props.allQuizes[this.props.quizKey].description.title

                                        }
                                        this.props.addResult(result)

                                    } else {
                                        this.setState({ currentQuestion: this.state.currentQuestion + 1 });
                                    }
                                }}
                            />

                        </Card>
                    </div>
                }
            }) : null);
    }
}
let mapStateToProps = (state) => {
    return {
        quizKey: state.QAReducer.selectedQuiz,
        allQuizes: state.QAReducer.allQuizs,
        score: state.QAReducer.score,
        users: state.AuthReducer.allUsers


    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateScore: (data) => { dispatch(QAAction.updateScore(data)) },
        addResult: (data) => { dispatch(QAAction.addResult(data)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
