import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledUserName } from '../PostContainer/PostContainer';

const StyledIndCommentDiv = styled.div`
    display:flex;
    flex-flow: row wrap;
    width:100%;
    padding-left: 10px;
`

const Comment = (props) => {
    return (
        <StyledIndCommentDiv>
            <StyledUserName type='comment'>{props.user}</StyledUserName> <span>{props.text}</span>
        </StyledIndCommentDiv>
    )
}

Comment.propTypes = {
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
Comment.defaultProps = {
    user: 'Username unavailable',
    text: 'Text unavailable'
}


export default Comment