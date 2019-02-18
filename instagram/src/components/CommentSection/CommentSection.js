import React from 'react'

const CommentSection = (props) => {
    return (
        <div>
            {props.comment.map((c, index) => <div key={index}>{c.username}</div>)
            }
        </div>
    )

}

export default CommentSection