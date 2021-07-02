import Action, { ActionType } from "../actions/actionTypes"
import State from "./State"
import  Post from '../apis/Post';
import { Reducer } from 'react'

export default (posts: Post[] = [], action: Action): Post[] =>{
            if(action.type === ActionType.FETCH_POSTS) {
                console.log(action.payload)
                return action.payload;
            }
            return posts;
}