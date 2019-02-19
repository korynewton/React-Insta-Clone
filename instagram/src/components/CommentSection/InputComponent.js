import React from 'react'
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


const InputComponent = (props) => {
        return (
        // <InputGroup className='input' onSubmit={props.commmentSubmit}>
        //     <Input onChange={props.commentHandler} placeholder="Add a Comment..." type="text" value={props.comment} />
        //     <InputGroupAddon addonType="append">Comment</InputGroupAddon>
        // </InputGroup>


        <form className='input' onSubmit={props.commmentSubmit}>
            <input onChange={props.commentHandler} placeholder="Add a Comment..." type="text" value={props.comment}/>
            <button>Comment</button>
        </form>
    )
}


export default InputComponent