import React from 'react'

const authenticate = Component => {
    return (
        class extends React.Component {
            render() {
                return <Component />     
            }
        }
    )
}

export default authenticate;