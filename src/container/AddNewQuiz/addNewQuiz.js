import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import history from "../history";
import { connect } from "react-redux";
import QAAction from "../../store/actions/QAAction";


class AddNewQuiz extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            title: '',
            description: '',
            intoVedio: '',
            img: ''

        }
    }
    render() {
        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={'Add New Quiz'}
                        subtitle="Add New Quiz Here !"
                    >
                    </CardTitle><hr />
                    <TextField
                        floatingLabelText="Title (requied)"
                        onChange={(e) => { this.setState({ title: e.target.value }) }}
                    /><br />
                    <TextField
                        floatingLabelText="Add Description (requied)"
                        onChange={(e) => { this.setState({ description: e.target.value }) }}
                        multiLine={true}
                        rows={3}
                    /><br />
                    <TextField
                        floatingLabelText="Introductory Vedio (requied)"
                        onChange={(e) => { this.setState({ intoVedio: e.target.value }) }}
                    /><br />
                    <div>
                        <CardTitle
                            subtitle="Select Your Cover Image !"
                        >
                        </CardTitle>
                        <img style={{ maxWidth: 300, maxHeight: 200 }} src={this.state.image == null ? "https://image.freepik.com/free-icon/jpg-file-format-variant_318-45505.jpg" : this.state.image} alt="" />
                        <br /> <input type="file" onChange={(event) => {
                            this.setState({ img: event.target.files[0] })
                            if (event.target.files && event.target.files[0]) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                    this.setState({ image: e.target.result });
                                };
                                reader.readAsDataURL(event.target.files[0]);
                            }
                        }
                        } className="filetype" id="group_image" />
                    </div><br />
                    <CardActions>
                        <RaisedButton label="Cancel" primary={true} style={{ margin: 12 }}
                            onClick={() => {
                                this.setState({
                                    image: null,
                                    title: '',
                                    description: '',
                                    intoVedio: '',
                                    img: null
                                })
                                history.push('/')
                            }} />
                        <RaisedButton label="ADD Quiz" secondary={true} style={{ margin: 12 }}
                            onClick={() => {
                                let quizObj = {
                                    title: this.state.title,
                                    description: this.state.description,
                                    intoVedio: this.state.intoVedio,
                                    img: this.state.img
                                }
                                this.props.addImg(quizObj)
                                this.setState({
                                    image: null,
                                    title: '',
                                    description: '',
                                    intoVedio: '',
                                    img: null
                                })
                                history.push('/newquiz')
                            }}
                        />
                    </CardActions><br />

                </Card>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addQuiz: (data) => { dispatch(QAAction.addQuiz(data)) },
        addImg : (data)=>{dispatch(QAAction.addImg(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNewQuiz)