import React, { Component } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'
import InputComponent from './InputComponent'


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            currentValue: ''
        }        
    }

    addNewComment = (event, index) => {
        event.preventDefault();
        const newComment = {
            username : 'TestUser',
            text: this.state.currentValue
        }
        // this.setState({
        //     comments[index] : [...comments[index], newComment]
        // })
    }

    render() {
        // console.log(this.state.comments[0])
        return (
            <>
                {this.state.comments.map((comment, index) => <Comment key={index} user={comment.username} text={comment.text} />)}
                <InputComponent />
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