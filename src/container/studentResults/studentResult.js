import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { connect } from "react-redux";
import * as firebase from 'firebase';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class StudentResults extends React.Component {
  render() {
    console.log('asdn');

    return (
      <div>
        <Card style={{ margin: '30px' }}>
          <CardTitle style={{}} title={`Your Scores`}
            subtitle="check your previous score"
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Quiz Name</TableHeaderColumn>
                <TableHeaderColumn>Score</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.results !== undefined ? Object.keys(this.props.results).map((val, i) => {
                let oneResult = this.props.results[val];
                if (oneResult.uid === this.props.user)
                  return <TableRow key={val+'k'}>  
                    <TableRowColumn>{oneResult.quizKey}</TableRowColumn>
                    <TableRowColumn>{oneResult.uid}</TableRowColumn>
                  </TableRow>
              }) : null}

            </TableBody>
          </Table>
        </Card>
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    results: state.QAReducer.results,
    user: state.AuthReducer.allUsers !== undefined ? state.AuthReducer.allUsers[firebase.auth().currentUser.uid].name : null
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentResults)
