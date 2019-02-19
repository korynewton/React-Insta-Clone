import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

const CommentSection = (props) => {
    console.log(props.comments)
    return (
        <>
            {props.comments.map((comment, index) => <Comment key={index} user={comment.username} text={comment.text} />)}
        </>
    )

}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection