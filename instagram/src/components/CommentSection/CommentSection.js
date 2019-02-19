import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

const CommentSection = (props) => {
    return (
        <>
            {props.comments.map((comment, index) => <Comment key={index} user={comment.username} text={comment.text} />)}
        </>
    )

}

CommentSection.propTypes = {
    comment: PropTypes.array,
    post: PropTypes.object
}

export default CommentSection