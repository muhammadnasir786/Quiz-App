import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Delete from 'material-ui/svg-icons/action/delete';
// import Edit from 'material-ui/svg-icons/action/';
import { connect } from "react-redux";
import history from "../history";



// const iconButtonElement = (
//     <IconButton
//         touch={true}
//         tooltip="more"
//         tooltipPosition="bottom-left"
//     >
//         <MoreVertIcon color={grey400} />
//     </IconButton>
// );
// const rightIconMenu = (
//     <IconMenu iconButtonElement={
//         <IconButton
//         touch={true}
//         tooltip="more"
//         tooltipPosition="bottom-left"
//     >
//         <MoreVertIcon color={grey400} />
//     </IconButton>
//     }>
//         <MenuItem leftIcon={<RemoveRedEye />}>View Description</MenuItem>
//         <MenuItem leftIcon={<PersonAdd />}>Edit</MenuItem>
//         <MenuItem leftIcon={<PersonAdd />}>Share</MenuItem>
//         <MenuItem leftIcon={<Delete />}>Delete</MenuItem>
//     </IconMenu>
// );




class MyQuiz extends Component {
    
    render() {
        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={'My Quizes'}
                        subtitle="Check Your Quiz Here !"
                    >
                    </CardTitle><hr />
                 {
                    //  console.log(this.props.quizes)
                    this.props.quizes !== undefined ? Object.keys(this.props.quizes).map((val,i)=>{
                        let oneQuiz = this.props.quizes[val];
                        // console.log(oneQuiz);
                      return  <List style={{ padding : 10}}>
                        <Card style={{ margin: '0px' }}>
                            <ListItem
                                leftAvatar={<Avatar src={oneQuiz.description.img} />}
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
                                        <MenuItem leftIcon={<RemoveRedEye />}
                                        onClick={()=>{
                                            history.push(`/quizdetail/${val}`)
                                        }}
                                        >View Description</MenuItem>
                                        <MenuItem leftIcon={<PersonAdd />}>Edit</MenuItem>
                                        <MenuItem leftIcon={<PersonAdd />}>Share</MenuItem>
                                        <MenuItem leftIcon={<Delete />}>Delete</MenuItem>
                                    </IconMenu>
                                    
                                    // Right Icon Button End 
                                }
                                primaryText={oneQuiz.description.title}
                                secondaryText={
                                    <p>{oneQuiz.description.description}</p>
                                }
                                secondaryTextLines={2}
                            />
                            
                            </Card>
                            {/* {console.log('asdasd')} */}
                    </List>
                    })
                    :null
                }
                   
                    
                </Card>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
    return {
        quizes : state.QAReducer.allQuizs
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyQuiz)