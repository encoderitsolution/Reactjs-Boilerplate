import { CREATE_POST } from '../Actions/PostActions';

const initialState = {
    posts: []
}

// This is a demo reducer
const PostReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_POST:
            return{
                ...state,
                posts: [...state.posts, action.payload],
            }            
        default: return state
    }
}

export default PostReducer;