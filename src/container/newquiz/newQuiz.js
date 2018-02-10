import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import history from '../history'
export default class NewQuiz extends Component {
    render() {
        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={'Create A New Quiz'}
                        subtitle="Add New Quiz Here !"
                    >
                    </CardTitle><hr />

                    <CardActions>
                        <div style={{ display: 'flex' }}>
                            <div style={{width : '50%'}}>
                                <span onClick={()=>{
                                    history.push('/addnewquiz')
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                                </span>
                                <CardTitle style={{}} title={'Quiz'}
                                    subtitle="Introduce, review and reward !"
                                >
                                </CardTitle>
                            </div>
                            <div  style={{width : '50%'}}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                                </span>
                                <CardTitle style={{}} title={'Quiz'}
                                    subtitle="Introduce, review and reward !"
                                >
                                </CardTitle>
                            </div>
                        </div>



                    </CardActions><br />
                </Card>
            </div>
        )
    }
}
