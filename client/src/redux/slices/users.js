import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: []
};

export const getAllUsers = createAsyncThunk(
    "users/getAll",
    async () => {
        const { data } = await axios.get("http://localhost:3001/api/users")
        return data.users;
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    },
});

const { reducer } = userSlice;
export default reducer;