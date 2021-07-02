import Action, { ActionType } from "./actionTypes";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import { Dispatch } from "react";
import Post from '../apis/Post'
import State from "../reducers/State";
import { AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export const fetchPosts = (): ThunkAction<void, State, unknown, Action> => {
    return async (dispatch) => {
        const response: AxiosResponse<Post[]> = await jsonPlaceholder.get<Post[]>('/posts')
        dispatch({type: ActionType.FETCH_POSTS, payload: response.data });
    }
}
