import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


const InputComponent = (props) => {
    return (
        <InputGroup className='input'>
            <Input placeholder="Add a Comment..." />
            <InputGroupAddon addonType="append">Comment</InputGroupAddon>
        </InputGroup>
    )
}


export default InputComponent