import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


const Comment = (props) => {
    return (
        <div className='individualComment'>
            <strong className='user'>{props.user}</strong> <span className='text'>{props.text}</span>
        </div>
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