import { configureStore } from '@reduxjs/toolkit';
import {passwordsReducer} from "./PasswordsSlice.ts";

export const store = configureStore({
    reducer: {
        passwords:passwordsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;