import {IComment} from "../../models/IComment";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getComments} from "../../services/api.service";


type CommentsSliceType = {
    comments: IComment[]
}

const commentsSliceInit: CommentsSliceType = {
    comments: []
}

const loadComments = createAsyncThunk('commentsSlice/loadComments', async (_, thunkAPI) => {
    try {
        const response = await getComments()
        return thunkAPI.fulfillWithValue(response)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: commentsSliceInit,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(action.payload)
            })
    }
})

export const commentsSliceActions = {
    ...commentsSlice.actions,
    loadComments
}

