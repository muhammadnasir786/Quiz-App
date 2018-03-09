import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import QAAction from '../../store/actions/QAAction'
import * as firebase from "firebase";
/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogForConfirm extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      pass : ''
    };
  }
  componentWillReceiveProps(nxtPorps) {
    console.log(nxtPorps);
    if (nxtPorps.isOpen === true) {
        this.setState({ open: nxtPorps.isOpen });
        this.props.isOpenDialogForPass();

    }
}

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log('asd');
    let payload = {
      email : firebase.auth().currentUser.email,
      password : this.state.pass
    }
    
    this.props.checkIsAuthenticateForUser(payload);
    if(this.props.isAuthenticateForUser){
      // this.setState({ open: false });
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        {/* <RaisedButton label="checkIsAuthenticateForUser" onClick={this.handleOpen} /> */}
        <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText="Write Password Here !"
            value={this.state.pass}
            onChange={(e) => { this.setState({ pass: e.target.value }) }}
          />

        </Dialog>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    isAuthenticateForUser: state.QAReducer.isAuthenticateForUser

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    checkIsAuthenticateForUser: (data) => { dispatch({ type: QAAction.IS_AUTHENTICATE_FOR_EDIT }) }

  }
}

connect(mapStateToProps, mapDispatchToProps)(DialogForConfirm)

