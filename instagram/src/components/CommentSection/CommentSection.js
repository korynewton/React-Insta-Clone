import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import InputComponent from './InputComponent';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.postId,
            comments: props.comments,
            comment: ''
        }        
    }

    commentHandler = e => {
        this.setState({comment : e.target.value});
    }

    commmentSubmit = e => {
        e.preventDefault();
        const newComment = {
            username : localStorage.getItem('username'),
            text: this.state.comment
        }
        // const comments = this.state.comments.slice();
        // comments.push(newComment);
        // this.setState({ comments, comment: ""})
        this.setState({
            comments : [...this.state.comments, newComment],
            comment: ''
        })

    }

    render() {
        return (
            <>
                {this.state.comments.map((comment, index) => <Comment key={index} user={comment.username} text={comment.text} />)}
                <InputComponent commentHandler={this.commentHandler} comment={this.state.comment} commmentSubmit={this.commmentSubmit}/>
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