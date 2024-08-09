import { createAsyncThunk } from '@reduxjs/toolkit';
import {PasswordMutation, Pin} from "../type.ts";
import axiosApi from "../axiosApi.ts";

interface DecodeRequest {
    password: string;
    message: string;
}

export const fetchPostPasswordsDecode = createAsyncThunk(
    "passwords/fetchPostDecode",
    async (newPasswords:PasswordMutation) => {
        const response = await axiosApi.post<PasswordMutation>('/passwords/decode',newPasswords);
        return response.data;
    }
);

export const fetchPostPasswordsEncode = createAsyncThunk<PasswordMutation[],PasswordMutation>(
    "passwords/fetchPostEncode",
    async (newPasswords:PasswordMutation) => {
        const response = await axiosApi.post<PasswordMutation>('/passwords/encode',newPasswords);
        return response.data;
    }
);


export const fetchPasswordsGetDecode = createAsyncThunk<Pin[],DecodeRequest>(
    'passwords/fetchGetDecode',
    async ({password,message}) => {
        const Passwords = await axiosApi.get<Pin[]>('/passwords/decode',{
            params:{
                password,
                message,
            }
        });
        return Passwords.data;
    }
);

export const fetchPasswordsGetEncode = createAsyncThunk<Pin[],DecodeRequest>(
    'passwords/fetchGetEncode',
    async ({password,message}) => {
        const Passwords = await axiosApi.get<Pin[]>('/passwords/encode',{
            params:{
                password,
                message,
            }
        });
        return Passwords.data;
    }
);