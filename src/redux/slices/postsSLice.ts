import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPosts} from "../../services/api.service";
import axios, {AxiosError} from "axios";

type PostsSliceType = {
    posts: IPost[],
    post: IPost | null
}

const postsSliceInit: PostsSliceType = {
    posts: [],
    post: null
}

const loadPosts = createAsyncThunk('postsSlice/loadPosts', async (_, thunkAPI) => {
    try {
        const response = await getPosts();
        return thunkAPI.fulfillWithValue(response)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: postsSliceInit,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(action.payload)
            })
    }
})

export const postsSliceActions = {
    ...postsSlice.actions,
    loadPosts
}

