import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    roomTypes: []
};

export const getAllRoomTypes = createAsyncThunk(
    "roomTypes/getAll",
    async () => {
        const { data } = await axios.get("http://localhost:3001/api/roomtypes")
        return data.roomTypes
    }
);

export const creatRoomType = createAsyncThunk(
    "roomType/create",
    async (roomType) => {
        await axios.post("http://localhost:3001/api/roomtypes/create", roomType, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            toast.success(res.data.success)
        }).catch((res) => {
            toast.error(res.response.data.error)
        });
    }
);

export const deleteRoomType = createAsyncThunk(
    "roomType/delete",
    async (id) => {
        await axios.delete(`http://localhost:3001/api/roomtypes/delete/${id}`, {
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

const roomTypeSlice = createSlice({
    name: "roomType",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllRoomTypes.fulfilled, (state, action) => {
            state.roomTypes = action.payload
        })

        builder.addCase(creatRoomType.fulfilled, (state, action) => { })

        builder.addCase(deleteRoomType.fulfilled, (state, action) => {
            state.roomTypes.splice(state.roomTypes.findIndex((arrow) => arrow.id === action.payload), 1);
        })
    },
});

const { reducer } = roomTypeSlice;
export default reducer;