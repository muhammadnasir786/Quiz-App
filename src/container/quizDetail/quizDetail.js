import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import AddQuestionDialog from "../questionDialog/addQuestionDialog";





let style = {
    margin: 12
}
class QuizDetail extends Component {
    constructor() {
        super();
        this.state  = {
            isOpenAddQuestionDialog : false
        }
    }
    componentDidMount() {

        // console.log(this.props.match.params);
    }
    isOpenAddQuestionDialogToFalse = ()=>{
        this.setState({ isOpenAddQuestionDialog : false})
    }
    
    render() {
        console.log(this.props.match.params);
        let quizData = this.props.quizes[this.props.match.params.quizKey];

        return (

            <Card style={{ margin: '30px' }}>
                <CardTitle style={{}} title={'Quiz Detail'}
                    subtitle="You can Edit , Update OR Delete Your Quiz!"
                >
                </CardTitle><hr />

                {quizData !== undefined ?
                    <div style={{ display: 'flex' }}>
                        {/* Description  */}
                        <Card style={{ margin: '10px', width: '40%' }}>
                            <CardTitle style={{}} title={'Cover Image OR Thumbnail'}
                                subtitle="Update Your Cover Image OR Thumbnail"
                            >
                            </CardTitle><hr />
                            {/* <div style={{ display: 'flex' }}> */}

                            {/* <Card style={{ margin: '30px' }}> */}
                            <img style={{maxWidth : 400 , maxHeight : 400}} src={quizData.img} alt="Quiz Thumbnail" />
                            <CardHeader>
                                {quizData.title}
                            </CardHeader>
                            <CardTitle>
                                {quizData.description}
                            </CardTitle>
                            <hr />
                            <RaisedButton label="Edit" secondary={true} style={style} />
                            <RaisedButton label="Delete" secondary={true} style={style} />
                            <RaisedButton label="Share" secondary={true} style={style} />
                            <RaisedButton label="Add Questions Here !" secondary={true} style={style} 
                            onClick={()=>{
                                this.setState({ isOpenAddQuestionDialog : !this.state.isOpenAddQuestionDialog})
                            }}
                            />
                            {/* </Card> */}

                        </Card>
                        <Card style={{ margin: '10px', width: '60%' }}>
                            <CardTitle style={{}} title={'Questions'}
                                subtitle="You can Edit , Update OR Delete Your Questions"
                                >
                            </CardTitle><hr />
                            <div>
                                {/* Questions  */}
                                
                                <Card style={{ margin: '10px' }}>
                                    <CardTitle style={{}} title={'Q1). WHat is Your Name  ? '}>
                                        <ol>
                                            <li>1. Nasir</li>
                                            <li>1. Nasir</li>
                                            <li>1. Nasir</li>
                                        </ol>
                                    </CardTitle>
                                </Card>
                               
                            </div>
                        </Card>
                    </div> : null}
                    <AddQuestionDialog 
                    isOpenAddQuestionDialogToFalse={this.isOpenAddQuestionDialogToFalse}
                    isOpen={this.state.isOpenAddQuestionDialog}
                    quizKey={this.props.match.params.quizKey} 
                     />
            </Card>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        quizes: state.QAReducer.allQuizs

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetail)



