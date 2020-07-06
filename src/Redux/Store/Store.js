import {createStore} from "redux";
import PostReducer from '../Reducers/PostReducer'

const store = createStore(
    PostReducer
);

export default store;