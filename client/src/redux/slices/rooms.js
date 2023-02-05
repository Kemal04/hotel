import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    rooms: []
};

export const getAllRooms = createAsyncThunk(
    "rooms/getAll",
    async () => {
        const { data } = await axios.get("http://localhost:3001/api/rooms")
        return data.rooms
    }
);

export const creatRoom = createAsyncThunk(
    "room/create",
    async (formData) => {
        await axios.post("http://localhost:3001/api/rooms/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            toast.success(res.data.success)
        }).catch((res) => {
            toast.error(res.response.data.error)
        });
    }
);

export const deleteRoom = createAsyncThunk(
    "room/delete",
    async (id) => {
        await axios.delete(`http://localhost:3001/api/rooms/delete/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                toast.success(res.data)
            }).catch((err) => {
                toast.error(err.message)
            })
    }
);

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllRooms.fulfilled, (state, action) => {
            state.rooms = action.payload
        })

        builder.addCase(creatRoom.fulfilled, (state, action) => { })

        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            state.rooms.splice(state.rooms.findIndex((arrow) => arrow.id === action.payload), 1);
        })
    },
});

const { reducer } = roomsSlice;
export default reducer;