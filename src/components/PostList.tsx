import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import State from '../reducers/State'
import Post from '../apis/Post'
import Dispatch, { ThunkDispatch } from 'redux-thunk'
import Action from '../actions/actionTypes'

interface PostListProps { 
    fetchPosts: () => void,
    posts: Post[]
}

const PostList = ({fetchPosts, posts}: PostListProps) => {
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div>posty {posts.length}</div>
    )
}

const mapStateToProps = (state: State) => {
    return { posts: state.posts, fetchPosts};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, Action>) => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);