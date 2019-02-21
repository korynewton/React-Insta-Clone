import React from 'react';
import './InputComponent.css';


const InputComponent = (props) => {
        return (
        <form className='input' onSubmit={props.commmentSubmit}>
            <input onChange={props.commentHandler} placeholder="Add a Comment..." type="text" value={props.comment}/>
            <button>Comment</button>
        </form>
    )
}


export default InputComponent