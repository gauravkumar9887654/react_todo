import { createSlice } from "@reduxjs/toolkit";

const UserData = createSlice({
    name: 'user',
    initialState: {
        items: [],
    },
    reducers: {
        replaceItems(state, action) {
            state.items = action.payload.items;
        },

        deleteItems(state, action) {
            state.items = state.items.filter((item) => {
                return item.id !== action.payload.id;
            })
        }

    }
});

export const userActions = UserData.actions;
export default UserData;
