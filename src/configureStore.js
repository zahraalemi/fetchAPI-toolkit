import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./component/postSlice";
export default configureStore({
  reducer: {
    posts: PostsReducer
  }
});
