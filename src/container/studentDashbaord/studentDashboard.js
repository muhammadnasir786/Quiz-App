import React, { Component } from 'react'
import { connect } from "react-redux";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import history from "../history";
import GetStartedQuiz from "../getStartedQuiz/getStartedQuiz";
import QAAction from "../../store/actions/QAAction";
class StudentDashboard extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={'Student Dashboard'}
                        subtitle=""
                    >
                    {/* <GetStartedQuiz/> */}
                    </CardTitle>
                    <div style={{ display: 'flex' }}> {
                        this.props.allQuizes !== undefined ? Object.keys(this.props.allQuizes).map((val, i) => {
                            let oneQuiz = this.props.allQuizes[val].description;
                            console.log(oneQuiz);
                            return (<Card zDepth={2} key={val+'std'} 
                                // onMouseover={()=>{ console.log();}}
                            style={{  border: '1px solid gray', borderRadius: 10 , margin : 15}} >
                                <CardTitle style={{ width: 300 }} title={oneQuiz.title}
                                    subtitle=""
                                >
                                    <img style={{ maxWidth: '100%', maxHeight: 400, border: '1px solid gray', borderRadius: 10 }} 
                                    src={oneQuiz.img} alt="" />
                                    <CardTitle style={{}}
                                        subtitle={oneQuiz.description}
                                    />
                                    <FlatButton label="GET Started"
                                    secondary={true}
                                    onClick={()=>{
                                        this.props.selectedQuiz(val)
                                        history.push(`/getstartedquiz/${val}`)
                                    }}
                                    />



                                </CardTitle>

                            </Card>)
                        })
                            : null}
                    </div>
                </Card>
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
        selectedQuiz : (data)=>{ dispatch(QAAction.selectedQuiz(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard)