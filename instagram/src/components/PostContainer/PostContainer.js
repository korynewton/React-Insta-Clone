import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'
import heart from '../../images/icons/heart.svg'
import comment from '../../images/icons/message-circle.svg'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';




//react strap <Card/> and <CardContainer/>



const PostContainer = (props) => {
    // console.log(props.posts)
    return (
        <Card className='postContainer'>
            <div className='postHeader'>
                <img src={props.posts.thumbnailUrl} alt={props.posts.username}/>
                <p>{props.posts.username}</p>
            </div>
            <div className='postImage'>
                <CardImg src={props.posts.imageUrl} alt={props.posts.username}/>
            </div>
            <CardBody>
                <div className="postIcons">
                    <img src={heart} alt="Like"/>
                    <img src={comment} alt="Comment"/>
                </div>
                <div className='postComments'>
                    <CommentSection comments={props.posts.comments}/>
                </div>
                <InputGroup className='input'>
                    <Input placeholder="Add a Comment..." />
                    <InputGroupAddon addonType="append">Comment</InputGroupAddon>
                </InputGroup>
            </CardBody>
            
            
        </Card>
    )
}

PostContainer.propTypes = {
    posts : PropTypes.object
}


export default PostContainer