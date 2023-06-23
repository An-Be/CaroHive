import { createSlice } from "@reduxjs/toolkit";

const initialState = {
user: null,
token: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.email
            state.token = action.payload.jwt
        },
        logUserOut: (state) => {
            state.user = null;
            state.token = null;
        }
    },
});

export const { setUser, logUserOut } = userSlice.actions;
export default userSlice.reducer;