import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

const CommentSection = (props) => {
    return (
        <div>
            {props.comment.map((c, index) => <Comment key={index} user={c.username} text={c.text} />)}
        </div>
    )

}

CommentSection.propTypes = {
    comment: PropTypes.array,
    post: PropTypes.object
}

export default CommentSection