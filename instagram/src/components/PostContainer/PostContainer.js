import React from 'react'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
    return (
        <div>
            {props.posts.map((p, index) => {
                return (
                    <div key={index}>
                        <h6>{p.username}</h6>
                        <CommentSection comment={p.comments} post={p} />
                    </div>
                    
                )
            })}
        </div>
    )
}


export default PostContainer