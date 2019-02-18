import React from 'react'

const Comment = (props) => {
    return (
        <div className='individualComment'>
            <span className='user'>{props.user}</span> <span className='text'>{props.text}</span>
        </div>
    )
}


export default Comment