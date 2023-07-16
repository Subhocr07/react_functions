import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            console.log(action.payload)
            state.push(action.payload);
        },
        removeUser(state, action) { },
        deleteUsers(state, action) { }
    }
})

// export { userSlice }
// console.log("userSlice", userSlice.actions)
export default userSlice.reducer
export const { addUser } = userSlice.actions;