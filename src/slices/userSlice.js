import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: "Initial message for Store",
    email: 'email'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setMessage(state, action) {
            state.message = action.payload
        }
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;