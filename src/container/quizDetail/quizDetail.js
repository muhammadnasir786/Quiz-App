import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import AddQuestionDialog from "../questionDialog/addQuestionDialog";
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Delete from 'material-ui/svg-icons/action/delete';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import QAAction from '../../store/actions/QAAction';
import history from "../history";
import * as firebase from "firebase";
import Dialog from 'material-ui/Dialog';
import DialogForConfirm from "../dialogForComfirm/dialogForConfrim";

let style = {
    margin: 12
}
class QuizDetail extends Component {
    constructor() {
        super();
        this.state = {
            isOpenAddQuestionDialog: false,
            isEditDescription: true,
            title: '',
            description: '',

        }
    }
    componentDidMount() {

        // console.log(this.props.match.params);
    }
    isOpenAddQuestionDialogToFalse = () => {
        this.setState({ isOpenAddQuestionDialog: false })
    }

    render() {
        // console.log(this.props.match.params);
        let quizData = this.props.quizes[this.props.match.params.quizKey];
        // console.log(quizData);
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
                            <img style={{ maxWidth: '100%', maxHeight: 400, border: '1px solid gray', borderRadius: 10 }}
                                src={quizData.description.img} alt="Quiz Thumbnail" />
                            <CardTitle>
                                {this.state.isEditDescription ? <i>{quizData.description.title}</i>
                                    : <TextField fullWidth
                                        floatingLabelText="Write New Title Here !"
                                        value={this.state.title}
                                        onChange={(e) => { this.setState({ title: e.target.value }) }}
                                    />}
                            </CardTitle>
                            <CardTitle>
                                {this.state.isEditDescription ? <i> {quizData.description.description} </i>
                                    : <TextField fullWidth floatingLabelText="Write New Description Here !"
                                        value={this.state.description}
                                        onChange={(e) => { this.setState({ description: e.target.value }) }}
                                    />}
                            </CardTitle>
                            <hr />

                            <span style={{ margin: 10, marginTop: 20 }} onClick={() => {
                                if (this.state.isEditDescription) {
                                    this.setState({
                                        isEditDescription: !this.state.isEditDescription,
                                        description: quizData.description.description,
                                        title: quizData.description.title
                                    })
                                } else {
                                    console.log('update Dec');
                                    let updatedDescription = {
                                        quizKey: this.props.match.params.quizKey,
                                        description: {
                                            description: this.state.description,
                                            img: quizData.description.img,
                                            intoVedio: quizData.description.intoVedio,
                                            title: this.state.title
                                        }
                                    }
                                    this.props.updateDescription(updatedDescription);
                                    this.setState({
                                        isEditDescription: !this.state.isEditDescription
                                    })
                                }
                            }}>{this.state.isEditDescription ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18">
                                    <path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                </svg>
                                } </span>

                            <span style={{ margin: 10, marginTop: 20 }}
                                onClick={() => {
                                    this.props.deleteQuiz(this.props.match.params.quizKey);
                                    history.push('/')
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                </svg>
                            </span>
                            <span style={{ margin: 10, marginTop: 20 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                                </svg>
                            </span>
                            <RaisedButton label="Add Questions Here !" secondary={true} style={style}
                                onClick={() => {
                                    this.setState({ isOpenAddQuestionDialog: !this.state.isOpenAddQuestionDialog })
                                }}
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/></svg> */}
                            </RaisedButton>
                            {/* </Card> */}

                        </Card>
                        <Card style={{ margin: '10px', width: '60%' }}>
                            <CardTitle style={{}} title={'Questions'}
                                subtitle="You can Edit , Update OR Delete Your Questions"
                            >
                            </CardTitle><hr />
                            {quizData.questions !== undefined ?
                                Object.keys(quizData.questions).map((questionKey, i) => {
                                    let oneQuestion = quizData.questions[questionKey];
                                    return <OneQuestion
                                        checkIsAuthenticateForUser={this.props.checkIsAuthenticateForUser}
                                        isAuthenticateForUser={this.props.isAuthenticateForUser}
                                        deleteQuestion={this.props.deleteQuestion}
                                        updateQuestion={this.props.updateQuestion}
                                        questionKey={questionKey}
                                        key={questionKey}
                                        quizKey={this.props.match.params.quizKey}
                                        oneQuestion={oneQuestion}
                                        toFalseIsAuthenticateForUser={this.props.toFalseIsAuthenticateForUser} />
                                })
                                : null}
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
    // console.log(state.QAReducer.isAuthenticateForUser);
    return {
        quizes: state.QAReducer.allQuizs,
        isAuthenticateForUser: state.QAReducer.isAuthenticateForUser
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateQuestion: (data) => { dispatch(QAAction.updateQuestion(data)) },
        deleteQuestion: (data) => { dispatch(QAAction.deleteQuestion(data)) },
        updateDescription: (data) => { dispatch(QAAction.updateDescription(data)) },
        deleteQuiz: (data) => { dispatch(QAAction.deleteQuiz(data)) },
        checkIsAuthenticateForUser: (data) => { dispatch({ type: QAAction.IS_AUTHENTICATE_FOR_EDIT, payload: data }) },
        toFalseIsAuthenticateForUser: () => { dispatch({ type: 'TO_FALSE_IS_AUTHENTICATE_FOR_USER' }) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetail)
class OneQuestion extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: true,
            question: '',
            opt1: '',
            opt2: '',
            opt3: '',
            ans: '',
            isAuthenticateForEdit: false,
            showTextFeild: false,
            pass: ''
        }

    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.isAuthenticateForUser);
        let oneQuestion = nextProps.oneQuestion;
        if (nextProps.isAuthenticateForUser) {
            console.log('inside IF');
            this.setState({
                showTextFeild: false,
                isAuthenticateForEdit: nextProps.isAuthenticateForEdit,
                // isEdit: false,
                question: oneQuestion.question,
                opt1: oneQuestion.opt1,
                opt2: oneQuestion.opt2,
                opt3: oneQuestion.opt3,
                ans: oneQuestion.ans
            })
        }
    }
    render() {
        let { oneQuestion } = this.props;
        // if(this.props.isAuthenticateForUser){
        //     this.setState({ showTextFeild : true , isEdit : !this.state.isEdit , pass : ''}) 
        // }
        return (
            <div>
                <div>
                    {/* Questions  */}

                    {/* // console.log(quizData);
                    // console.log(oneQuestion);
                    return ( */}
                    <Card style={{ margin: '10px', borderRadius: 10, border: '1px solid gray' }} zDepth={3}>
                        {this.state.showTextFeild ? <span>
                            <TextField floatingLabelText="Write Password !"
                                type="password"
                                value={this.state.pass}
                                onChange={(e) => { this.setState({ pass: e.target.value }) }}
                            />  <span onClick={() => {
                                let user = {
                                    email: firebase.auth().currentUser.email,
                                    password: this.state.pass
                                }
                                this.props.checkIsAuthenticateForUser(user);
                            }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg></span> </span> : null}
                        <ListItem
                            disabled={true}
                            // leftAvatar={<Avatar src={oneQuiz.img} />}
                            rightIconButton={
                                // Right Icon Button 
                                <IconMenu iconButtonElement={
                                    <IconButton
                                        touch={true}
                                        tooltip="more"
                                        tooltipPosition="bottom-left"
                                    >
                                        <MoreVertIcon color={grey400} />
                                    </IconButton>
                                }>

                                    {this.state.isEdit && this.state.showTextFeild === false ? <MenuItem leftIcon={<PersonAdd />}
                                        onClick={() => {
                                            if (this.props.isAuthenticateForUser === false) {
                                                this.setState({ showTextFeild: true });
                                            } else {
                                                this.setState({ isEdit: !this.state.isEdit })
                                            }
                                        }}>Edit</MenuItem> : null}

                                    <MenuItem leftIcon={<Delete />}
                                        onClick={() => {
                                            let toDeleteQuestion = {
                                                quizKey: this.props.quizKey,
                                                questionKey: this.props.questionKey
                                            }
                                            this.props.deleteQuestion(toDeleteQuestion)
                                        }}
                                    >Delete</MenuItem>
                                    {this.state.isEdit ? <MenuItem leftIcon={<PersonAdd />}>Share</MenuItem> : null}
                                </IconMenu>

                                // Right Icon Button End 
                            }
                        // primaryText={}                                                // secondaryText={
                        // <p>{oneQuiz.description}</p>
                        // }
                        // secondaryTextLines={2}
                        >
                            <CardTitle title={this.state.isEdit ? `Q). ${oneQuestion.question}` : null}>
                                {this.state.isEdit ? null :
                                    <TextField
                                        fullWidth floatingLabelText="Update Question !"
                                        value={this.state.question}
                                        onChange={(e) => { this.setState({ question: e.target.value }) }}
                                    />}
                                <ol>
                                    <li>{this.state.isEdit ? oneQuestion.opt1 :
                                        <TextField fullWidth floatingLabelText="Update Option 1 !"
                                            value={this.state.opt1}
                                            onChange={(e) => { this.setState({ opt1: e.target.value }) }}
                                        />}
                                    </li>
                                    <li>{this.state.isEdit ? oneQuestion.opt2 :
                                        <TextField fullWidth floatingLabelText="Update Option 2 !"
                                            value={this.state.opt2}
                                            onChange={(e) => { this.setState({ opt2: e.target.value }) }}
                                        />}
                                    </li>
                                    <li>{this.state.isEdit ? oneQuestion.opt3 :
                                        <TextField fullWidth floatingLabelText="Update Option 3 !"
                                            value={this.state.opt3}
                                            onChange={(e) => { this.setState({ opt3: e.target.value }) }}
                                        />}
                                    </li>
                                    {this.state.isEdit ? null : <span> <SelectField
                                        // floatingLabelText="Frequency"
                                        value={this.state.ans}
                                        onChange={(event, index, value) => this.setState({ ans: value })}
                                    >
                                        <MenuItem selected disabled={true} primaryText="Select Correct Answer" />
                                        <MenuItem value={this.state.opt1} primaryText="Option 1" />
                                        <MenuItem value={this.state.opt2} primaryText="OPtion 2" />
                                        <MenuItem value={this.state.opt3} primaryText="Option 3" />

                                    </SelectField>
                                        <br />
                                        <span onClick={() => {
                                            let updatedQuestion = {
                                                questionObj: {
                                                    question: this.state.question,
                                                    opt1: this.state.opt1,
                                                    opt2: this.state.opt2,
                                                    opt3: this.state.opt3,
                                                    ans: this.state.ans
                                                },
                                                quizKey: this.props.quizKey,
                                                questionKey: this.props.questionKey
                                            }
                                            this.props.updateQuestion(updatedQuestion);
                                            this.setState({
                                                isEdit: true,
                                                question: '',
                                                opt1: '',
                                                opt2: '',
                                                opt3: '',
                                                ans: '',
                                            })
                                            this.props.toFalseIsAuthenticateForUser();

                                        }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg></span>
                                    </span>
                                    }
                                </ol>
                            </CardTitle>
                        </ListItem>
                        {/* <CardTitle style={{marginTop : '-20'}} >
                                                
                                            </CardTitle> */}
                    </Card>
                    {/* <DialogForConfirm isOpen={this.state.showDialogForPass}
                    isOpenDialogForPass={()=>{this.setState({ showDialogForPass : false})}}
                    /> */}



                </div>
            </div>
        )
    }
}
// let mapStateToPropss = (state) => {
//     console.log(state.QAReducer.isAuthenticateForUser);
//     return {
//         isAuthenticateForUser: state.QAReducer.isAuthenticateForUser

//     }
// }
// let mapDispatchToPropss = (dispatch) => {
//     return {
//     }
// }

// connect(mapStateToPropss, mapDispatchToPropss)(OneQuestion)