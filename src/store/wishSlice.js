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
                pic: action.payload.pic,
                tick: action.payload.tick
            })
        },
        deleteCard(state, action) {
            state.list = state.list.filter(item => item.name !== action.payload.name);
        },
        clearState(state) {
            state.list = [];
        }
    }
});

export const { addCard, deleteCard, clearState } = wishSlice.actions;
export default wishSlice.reducer;
