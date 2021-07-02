import Post from '../apis/Post'

export enum ActionType {
    FETCH_POSTS,
    DELETE_POLICY,
    CREATE_CLAIM,
  }

interface ActionFetchPosts {
    type: ActionType.FETCH_POSTS
    payload: Post[]
}

interface ActionCreateClaims {
    type: ActionType.CREATE_CLAIM,
    payload: {
        name: string,
        moneyToCollect: number
    }
}

type Action = ActionFetchPosts  | ActionCreateClaims;

export default Action;