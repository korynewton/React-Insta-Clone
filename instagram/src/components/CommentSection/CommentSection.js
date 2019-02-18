import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map((comment, index) => <Comment key={index} user={comment.username} text={comment.text} />)}
        </div>
    )

}

CommentSection.propTypes = {
    comment: PropTypes.array,
    post: PropTypes.object
}

export default CommentSection