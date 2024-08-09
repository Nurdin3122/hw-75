
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Password, Pin} from "../type.ts";
import {fetchPasswordsGetDecode,fetchPasswordsGetEncode, fetchPostPasswordsDecode, fetchPostPasswordsEncode} from "./PasswordsThunk.ts";
interface PasswordsState {
    passwords: Password[];
    fetchLoading: boolean;
    password:Pin[]
}
const initialState: PasswordsState = {
    passwords: [],
    fetchLoading: false,
    password:[],
};
export const passwordsSlice = createSlice<PasswordsState>({
    name: 'passwords',
    initialState,
    reducers: {},
    extraReducers:(builder) =>  {
        builder.addCase(fetchPasswordsGetDecode.pending,(state) =>{
            state.fetchLoading = true;
        });
        builder.addCase(fetchPasswordsGetDecode.fulfilled,(state,action:PayloadAction<Pin[]>) =>{
            state.fetchLoading = false;
            state.password = action.payload
        })

        builder.addCase(fetchPasswordsGetEncode.pending,(state) =>{
            state.fetchLoading = true;
        });
        builder.addCase(fetchPasswordsGetEncode.fulfilled,(state,action:PayloadAction<Pin[]>) =>{
            state.fetchLoading = false;
            state.password = action.payload
        })




        builder.addCase(fetchPostPasswordsDecode.pending,(state) =>{
            state.fetchLoading = true;
        });
        builder.addCase(fetchPostPasswordsDecode.fulfilled,(state) =>{
            state.fetchLoading = false;
        });
        builder.addCase(fetchPostPasswordsEncode.pending,(state) =>{
            state.fetchLoading = true;
        });
        builder.addCase(fetchPostPasswordsEncode.fulfilled,(state) =>{
            state.fetchLoading = false;
        });
    }
});

export const passwordsReducer = passwordsSlice.reducer;