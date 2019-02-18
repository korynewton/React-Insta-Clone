import React from 'react'
import Comment from './Comment'

const CommentSection = (props) => {
    return (
        <div>
            {props.comment.map((c, index) => <Comment key={index} user={c.username} text={c.text} />)}
        </div>
    )

}

export default CommentSection