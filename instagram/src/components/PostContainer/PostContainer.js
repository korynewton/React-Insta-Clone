import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import LikeComponent from './LikeComponent';
import styled from 'styled-components';


const StyledParentContainerDiv = styled.div`
    width:640px;
    display: flex;
    flex-flow: column nowrap;
    margin: 30px auto;
    border: 1px solid lightgray;
`

const StyledPostHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid blue; */
    height:50px;
`

const StyledThumbNail = styled.img`
    border-radius: 50%;
    width:30px;
    height: 30px;
    margin-left: 10px;
`
export const StyledUserName = styled.p`
    margin: auto 10px;
    font-weight: 700;

    ${props => (props.type === "comment" ? `font-weight:450` : null )}
    ${props => (props.type === "comment" ? `margin:0 5px 0 0` : null )}

`
const StyledPostImg = styled.img`
`
const PostBody = styled.div`
`



const PostContainer = (props) => {
    return (
        <StyledParentContainerDiv>

            <StyledPostHeader>
                <StyledThumbNail src={props.posts.thumbnailUrl} alt={props.posts.username}/>
                <StyledUserName>{props.posts.username}</StyledUserName>            
            </StyledPostHeader>

            <StyledPostImg src={props.posts.imageUrl} alt={props.posts.username}/>

            <PostBody>
                <LikeComponent likes={props.posts.likes} />
                <CommentSection comments={props.posts.comments} postId={props.postId} />
            </PostBody>    

        </StyledParentContainerDiv>

    )
}


PostContainer.propTypes = {
    posts : PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array
        })
}


export default PostContainer