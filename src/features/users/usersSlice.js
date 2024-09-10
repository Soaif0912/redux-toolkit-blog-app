import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id: '0', name: 'Soaif Ikbal'},
    {id: '1', name: 'Jjo Bullke'},
    {id: '2', name: 'koka kill'}
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;