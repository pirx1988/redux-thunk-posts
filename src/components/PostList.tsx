import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import State from '../reducers/State'
import Post from '../apis/Post'

interface PostListProps { 
    fetchPosts: () => void,
    posts: Post[]
}

const PostList = (props : PostListProps) => {
    useEffect(() => {
        props.fetchPosts()
    }, [])
    return (
        <div>Post List with length</div>
    )
}

const mapStateToProps = (state: State) => {
    return { posts: state.posts};
};

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);