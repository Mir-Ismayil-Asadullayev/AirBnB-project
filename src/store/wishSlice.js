import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: 'wishList',
    initialState: {
        list: [],
    },
    reducers: {
        addCard(state, action) {
            state.list.push({
                name: action.payload.name,
                photo: action.payload.photo,
                pic: action.payload.pic
            })
        },
        deleteCard(state, action) { },
        clearCard(state, action) { }
    }
});

export const { addCard, deleteCard, clearCard } = wishSlice.actions;
export default wishSlice.reducer;
