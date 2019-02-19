import React, { Component } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }        
    }

    render() {
        return (
            <>
                {this.state.comments.map((comment, index) => <Comment key={index} user={comment.username} text={comment.text} />)}
            </>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

CommentSection.defaultProps = {
        username: 'Username unavailable',
        text: 'Text unavailable'
}
export default CommentSection