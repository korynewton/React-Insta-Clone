import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'
import heart from '../../images/icons/heart.svg'
import comment from '../../images/icons/message-circle.svg'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';



const PostContainer = (props) => {
    // console.log(props.postId)
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
                <div className="likesTotal">
                    <CardSubtitle>{props.posts.likes} likes</CardSubtitle>
                </div>
                <div className='postComments'>
                    <CommentSection comments={props.posts.comments} postId={props.postId} />
                </div>
            </CardBody>
            
            
        </Card>
    )
}

PostContainer.propTypes = {
    posts : PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array
        })
}


export default PostContainer