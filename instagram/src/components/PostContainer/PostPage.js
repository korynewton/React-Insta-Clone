import React from 'react'
import PostContainer from './PostContainer'

const PostPage = (props) => {
    return (
        <div>
          {props.filtered.length > 0 
          ? props.filtered.map((post, index) => <PostContainer key={index} postId={index} posts={post} />)
          : props.posts.map((post, index) => <PostContainer key={index} postId={index} posts={post} />)
        }
        </div>
    )
}

export default PostPage