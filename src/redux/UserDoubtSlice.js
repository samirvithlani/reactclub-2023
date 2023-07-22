import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData : (state,action)=>{
            state.users = action.payload
        }
    }
})
export const {setUserData} = userSlice.actions
export default userSlice.reducer