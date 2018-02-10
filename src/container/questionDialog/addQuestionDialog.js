import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { connect } from "react-redux";
import QAAction from "../../store/actions/QAAction";


class AddQuestionDialog extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            question: '',
            opt1: '',
            opt2: '',
            opt3: '',
            ans: ''
        }
    }


    componentWillReceiveProps(nxtPorps) {
        console.log(nxtPorps);
        if (nxtPorps.isOpen === true) {
            this.setState({ open: nxtPorps.isOpen });
            this.props.isOpenAddQuestionDialogToFalse();

        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            question: '',
            opt1: '',
            opt2: '',
            opt3: '',
            ans: ''
        })
        this.setState({ open: false });
    };
    
    render() {
        const actions = [
            <FlatButton
            label="Add Question"
            primary={true}
            keyboardFocused={true}
            onClick={()=>{
                console.log(this.props.quizKey);
                let forPayload = {
                 questionObj : {
                    question : this.state.question,
                    opt1 : this.state.opt1,
                    opt2 : this.state.opt3,
                    opt3 : this.state.opt3,
                    ans : this.state.ans 
                } ,
                quizKey : this.props.quizKey
            }
                this.props.addQuestion(forPayload)
                this.setState({ open: false });
                }}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Add New Question"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        floatingLabelText="Write Question Here !"
                        onChange={(e) => { this.setState({ question: e.target.value }) }}
                    /><br />
                    <TextField
                        floatingLabelText="First Option!"
                        onChange={(e) => { this.setState({ opt1: e.target.value }) }}
                    /><br />
                    <TextField
                        onChange={(e) => { this.setState({ opt2: e.target.value }) }}
                        floatingLabelText="Second Option"
                    /><br />
                    <TextField
                        floatingLabelText="Third Option"
                        onChange={(e) => { this.setState({ opt3: e.target.value }) }}
                    /><br />
                    <SelectField
                        // floatingLabelText="Frequency"
                        value={this.state.value}
                        onChange={(event, index, value) => this.setState({ ans: value })}
                    >
                        <MenuItem selected disabled={true} primaryText="Select Correct Answer" />
                        <MenuItem value={1} primaryText="Option 1" />
                        <MenuItem value={2} primaryText="OPtion 2" />
                        <MenuItem value={3} primaryText="Option 3" />

                    </SelectField>
                </Dialog>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (data) => { dispatch(QAAction.addQuestion(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionDialog)