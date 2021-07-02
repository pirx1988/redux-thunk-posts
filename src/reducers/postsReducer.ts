import Action, { ActionType } from "../actions/actionTypes"
import  Post from '../apis/Post';

export default (posts: Post[] = [], action: Action): Post[] =>{
            if(action.type === ActionType.FETCH_POSTS) {
                return action.payload;
            }
            return posts;
}