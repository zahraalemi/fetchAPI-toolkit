import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async ({ id }) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());
});

const postSlice = createSlice({
  name: "posts",

  initialState: {
    name: "test",
    postsList: "",
    status: null
  },

  reducers: {
  },

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading...";

      console.log(state.status);
    },

    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";

      state.postsList = action.payload;

      console.log(state.postsList);
    },

    [getPosts.rejected]: (state) => {
      state.status = "rejected";

      console.log(state.status);
    }
  }
});

const {  reducer } = postSlice;

export default reducer;
