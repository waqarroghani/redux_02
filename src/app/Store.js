import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/Postsslice';
import usersReducer from '../features/users/userSlice';


export const Store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
  }
  
})
