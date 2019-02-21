import React, { Component } from 'react';
import heart from '../../images/icons/heart.svg';
import comment from '../../images/icons/message-circle.svg';
// import { CardSubtitle } from 'reactstrap';
import styled from 'styled-components'


const ActionIcon = styled.img`
    margin: 10px;
`
const LikesTotal = styled.h6`
    margin-left: 10px;
`

class LikeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : props.likes
        }
    }

    incrementLikes = () => {
        this.setState({
             likes : this.state.likes + 1
        })
    }

    render() {
        return (
            <>
                <ActionIcon onClick={this.incrementLikes} src={heart} alt="Like"/>
                <ActionIcon src={comment} alt="Comment"/>
                <LikesTotal>{this.state.likes} likes</LikesTotal>
            </>
        )
    }
    

        
        
    
}



export default LikeComponent