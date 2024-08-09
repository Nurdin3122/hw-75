import { createAsyncThunk } from '@reduxjs/toolkit';
import {Password, Pin} from "../type.ts";
import axiosApi from "../axiosApi.ts";

interface DecodeRequest {
    password: string;
    message: string;
}

export const fetchPostPasswordsDecode = createAsyncThunk(
    "passwords/fetchPostDecode",
    async (newPasswords:Password) => {
        console.log(newPasswords,"POST")
        const response = await axiosApi.post<Password>('/passwords/decode',newPasswords);
        return response.data;
    }
);

export const fetchPostPasswordsEncode = createAsyncThunk<Password[],Password>(
    "passwords/fetchPostEncode",
    async (newPasswords:Password) => {
        console.log(newPasswords,"POST2")
        const response = await axiosApi.post<Password>('/passwords/encode',newPasswords);
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