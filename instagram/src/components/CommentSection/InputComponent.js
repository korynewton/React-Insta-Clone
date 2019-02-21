import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
    margin-top: 10px;
    width:80%;
`
const StyledButton = styled.button`
    margin-top: 10px;
    width:20%;
`





const InputComponent = (props) => {
        return (
        <form className='input' onSubmit={props.commmentSubmit}>
            <StyledInput onChange={props.commentHandler} placeholder="Add a Comment..." type="text" value={props.comment}/>
            <StyledButton>Comment</StyledButton>
        </form>
    )
}


export default InputComponent