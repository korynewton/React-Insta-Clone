import React, { Component } from 'react';
import heart from '../../images/icons/heart.svg'
import comment from '../../images/icons/message-circle.svg'
import { CardSubtitle } from 'reactstrap';

class LikeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : props.likes
        }
    }

    incrementLikes = () => {
        // console.log('in the increment function')
        this.setState({
             likes : this.state.likes + 1
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <img onClick={this.incrementLikes} src={heart} alt="Like"/>
                <img src={comment} alt="Comment"/>
                <CardSubtitle>{this.state.likes} likes</CardSubtitle>
            </div>
        )
    }
    

        
        
    
}



export default LikeComponent