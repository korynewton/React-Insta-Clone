import React from 'react'
import PropTypes from 'prop-types'

const Comment = (props) => {
    return (
        <div className='individualComment'>
            <span className='user'>{props.user}</span> <span className='text'>{props.text}</span>
        </div>
    )
}

Comment.propTypes = {
    user: PropTypes.string,
    text: PropTypes.string
}


export default Comment