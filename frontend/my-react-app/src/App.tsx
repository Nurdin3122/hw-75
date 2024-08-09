import './App.css'
import {Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./Redux/store.ts";
import React, {useState} from "react";
import {
    fetchPasswordsGetDecode, fetchPasswordsGetEncode,
    fetchPostPasswordsDecode,
    fetchPostPasswordsEncode
} from "./Redux/PasswordsThunk.ts";
import {PasswordMutation} from "./type.ts";

const emptyState:PasswordMutation = {
    password:"",
    message:"",
}

const App = () => {
    const dispatch:AppDispatch = useDispatch();
    const password = useSelector((state:RootState) => state.passwords.password)
    const [newPassword, setNewPassword] = useState<PasswordMutation>(emptyState);


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    const onDecoded = async () => {
        const updatedPassword = { ...newPassword, encrypt: false };
        setNewPassword(updatedPassword);
        await dispatch(fetchPostPasswordsDecode(newPassword));
        await dispatch(fetchPasswordsGetDecode({
            password: updatedPassword.password,
            message: updatedPassword.message
        }));
    }

    const onEncoded = async () => {
        const updatedPassword = { ...newPassword, encrypt: true };
        setNewPassword(updatedPassword);
       await dispatch(fetchPostPasswordsEncode(newPassword));
        await dispatch(fetchPasswordsGetEncode({
            password: updatedPassword.password,
            message: updatedPassword.message
        }));
    }

    return (
        <>
            <CssBaseline/>
            <header>
                <Typography variant="h4" gutterBottom>
                    Cipher
                </Typography>
            </header>

                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="Decoded Message" variant="filled" fullWidth name="message" value={newPassword.message || ""} onChange={onChange}/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="Password" variant="filled" sx={{marginTop: 3}} name="password" value={newPassword.password || ""} onChange={onChange}/>
                            <Grid item sx={{alignItems: "center", margin: 3}}>
                                <Button variant="contained" sx={{marginRight: 3,}} onClick={onDecoded}>Decode</Button>
                                <Button variant="outlined" onClick={onEncoded}>Encode</Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="Encoded Message" variant="filled" fullWidth name="message" value={newPassword.message || ""} onChange={onChange} />
                        </Grid>
                    </Grid>
                </Container>
            <footer></footer>
        </>
    )
};

export default App
