import { createSlice } from '@reduxjs/toolkit'

export const usernameSlice = createSlice({
    name: 'usernames',
    initialState: {
        usernames: []
    },
    reducers: {
        setGlobalUsername: (state, action) => {
            state.usernames = action.payload;
        }
    }
})

export const { setGlobalUsername } = usernameSlice.actions;

export default usernameSlice.reducer;