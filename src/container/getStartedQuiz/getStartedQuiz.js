import React, { Component } from 'react'
import { connect } from "react-redux";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import history from '../history'
class GetStartedQuiz extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        let quizData;
        this.props.allQuizes[this.props.match.params.quizKey] !== undefined ? 
         quizData = this.props.allQuizes[this.props.match.params.quizKey] : null
        return (
            <div>
                {quizData !== undefined ?
                    <Card style={{ margin: '30px' }}>
                        <CardTitle style={{}} title={quizData.description.title}
                            subtitle=""
                        >
                        </CardTitle>
                            <img style={{maxWidth : 300 , maxHeight : 400}}
                             src={quizData.description.img} alt=""/>
                        <br/>
                        <i><p>{quizData.description.description}</p></i>
                        <TextField
                            floatingLabelText="Insert Private Key"

                        /><br />
                        <FlatButton label={quizData.questions !== undefined ? 'Start Quiz' : 'No Question Yet'} secondary={true} 
                        disabled={quizData.questions !== undefined ? false : true}
                        onClick={()=>{
                            history.push('/quiz')
                        }}
                        />

                    </Card> : null}
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        allQuizes: state.QAReducer.allQuizs,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetStartedQuiz)