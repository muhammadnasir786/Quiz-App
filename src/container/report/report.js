import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { connect } from "react-redux";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
const styles = {
    customWidth: {
        width: 200,
    },
};
class Report extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedQiuz: '' };
    }
    render() {
        // console.log(;
        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={` Over All Report `}
                        subtitle=""
                    >
                        <DropDownMenu
                            value={this.state.selectedQiuz}
                            onChange={(event, index, value) => { this.setState({ selectedQiuz: value }) }}
                            style={styles.customWidth}
                            autoWidth={false}
                        >
                            {this.props.quizes !== undefined ? Object.keys(this.props.quizes).map((val, i) => {
                                let oneQuiz = this.props.quizes[val];
                                // console.log(oneQuiz);
                                return <MenuItem value={`${oneQuiz.description.title}`} primaryText={`${oneQuiz.description.title}`} />
                            }) : null
                            }

                        </DropDownMenu>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>{`Quiz Name `}</TableHeaderColumn>
                                    <TableHeaderColumn>{`Student Name `}</TableHeaderColumn>
                                    <TableHeaderColumn>{`Score`}</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.props.results !== undefined ? Object.keys(this.props.results).map((val, i) => {
                                    let oneResult = this.props.results[val];
                                    console.log(oneResult);
                                    if (this.state.selectedQiuz === oneResult.quizKey) {
                                        console.log(oneResult)
                                        return <TableRow>
                                            <TableRowColumn>{oneResult.quizKey}</TableRowColumn>
                                            <TableRowColumn>{oneResult.uid}</TableRowColumn>
                                            <TableRowColumn>{oneResult.score}</TableRowColumn>
                                        </TableRow>

                                    }
                                
                                }) : null}

                            </TableBody>
                        </Table>

                    </CardTitle>

                </Card>
                {/* {console.log(this.props.result)} */}
            </div>
        )
    }

}
let mapStateToProps = (state) => {

    return {
        results: state.QAReducer.results,
        quizes: state.QAReducer.allQuizs,
        users: state.AuthReducer.allUsers
    }

}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Report)
// console.log('nASIR');
