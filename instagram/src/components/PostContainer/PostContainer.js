import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
    // console.log(props)
    return (
        <div>
            {props.posts.map((p, index) => {
                return (
                    <div key={index}>
                        <h6>{p.username}</h6>
                        <CommentSection comment={p.comments} post={p} />
                        <input type="text" placeholder="add another comment"/>
                    </div>
                    
                )
            })}
        </div>
    )
}

PostContainer.propTypes = {
    posts : PropTypes.array
}


export default PostContainer