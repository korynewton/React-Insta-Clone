import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'

const PostContainer = (props) => {
    // console.log(props.posts)
    return (
        <div className='postContainer'>
            <div className='postHeader'>
                <img src={props.posts.thumbnailUrl} alt={props.posts.username}/>
                <p>{props.posts.username}</p>
            </div>
            <div className='postImage'>
                <img src={props.posts.imageUrl} alt={props.posts.username}/>
            </div>
            <div>
                <h6>{props.posts.username}</h6>
                <CommentSection comments={props.posts.comments}/>
            </div>
            <input type="text" placeholder="add another comment"/>
        </div>
    )
}

PostContainer.propTypes = {
    posts : PropTypes.array
}


export default PostContainer