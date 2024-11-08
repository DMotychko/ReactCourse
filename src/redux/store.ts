import {configureStore, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {postsSlice} from "./slices/postsSLice";
import {usersSlice} from "./slices/usersSlice";
import {commentsSlice} from "./slices/commentsSlice";

export const store = configureStore({
    reducer: {
        postsSLice: postsSlice.reducer,
        usersSlice: usersSlice.reducer,
        commentsSlice: commentsSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()