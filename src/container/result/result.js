import React, { Component } from 'react'
import history from "../history";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from "react-redux";
 class Result extends Component {
    render() {

        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={`Your Score ${this.props.score}`}
                        subtitle="Keep it up"
                    >
                    </CardTitle>
                    <CardTitle title="" />
                    <FlatButton label="Back To the Dashboard" secondary={true}
                        onClick={() => {
                            history.push('/')
                            this.props.endQuiz();

                        }}
                    />

                </Card>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
    return {
        score : state.QAReducer.score
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        endQuiz: () => { dispatch({ type: 'END_QUIZ' }) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result)
