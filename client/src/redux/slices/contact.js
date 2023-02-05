import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    contacts: []
};

export const getAllContacts = createAsyncThunk(
    "contacts/getAll",
    async () => {
        const { data } = await axios.get("http://localhost:3001/api/contact")
        return data.contacts;
    }
);

export const creatContact = createAsyncThunk(
    "contact/create",
    async (contact) => {
        const { data } = await axios.post("http://localhost:3001/api/contact/create", contact)
        toast.success(data.success)
    }
);

export const deleteContact = createAsyncThunk(
    "contact/delete",
    async (id) => {
        const { data } = await axios.delete(`http://localhost:3001/api/contact/delete/${id}`)
        toast.success(data.success)
    }
);


const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllContacts.fulfilled, (state, action) => {
            state.contacts = action.payload
        })

        builder.addCase(creatContact.fulfilled, (state, action) => { })

        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts.splice(state.contacts.findIndex((arrow) => arrow.id === action.payload), 1);
        })
    },
});

const { reducer } = contactSlice;
export default reducer;