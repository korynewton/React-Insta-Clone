import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
    /* margin-top: 10px; */
    width:80%;
    height:30px;
    border: none;
    border-top: 1px solid black;
`
const StyledButton = styled.button`
    /* margin-top: 10px; */
    width:20%;
    border: none;
    border-top: 1px solid black;
    background: lightgray;

    &:hover{
        cursor:pointer;
    }

`

const StyledFormDiv = styled.form`
    margin-top: 10px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center; 
    padding: 0 10px;  

`





const InputComponent = (props) => {
        return (
                <StyledFormDiv className='input' onSubmit={props.commmentSubmit}>
                    <StyledInput onChange={props.commentHandler} placeholder="Add a Comment..." type="text" value={props.comment}/>
                    <StyledButton>Comment</StyledButton>
                </StyledFormDiv>
        
    )
}


export default InputComponent