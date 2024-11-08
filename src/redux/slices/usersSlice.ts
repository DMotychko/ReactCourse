import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "../../services/api.service";


type UsersSliceType = {
    users: IUser[]
}

const usersSliceInit: UsersSliceType = {
    users: []
}

const loadUsers = createAsyncThunk('usersSlice/loadUsers', async (_, thunkAPI) => {
    try {
        const response = await getUsers()
        return thunkAPI.fulfillWithValue(response)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: usersSliceInit,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled,(state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(action.payload)
            })
    }
})

export const usersSliceActions = {
    ...usersSlice.actions,
    loadUsers
}