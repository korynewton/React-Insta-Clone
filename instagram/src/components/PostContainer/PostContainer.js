import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'
import { Card, CardImg, CardBody} from 'reactstrap';
import LikeComponent from './LikeComponent';





const PostContainer = (props) => {
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
                <div className="likeContainer">
                    <LikeComponent likes={props.posts.likes} />
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