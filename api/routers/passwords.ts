import express from "express";
import {vigenereCipher} from "./function";
const passwordsRouter = express.Router();

passwordsRouter.post('/encode', async (req, res) => {
    try {
        const { password, message } = req.body;
        if (!password || !message) {
            return res.status(400).send("Password and message are required");
        }
        const encoded = vigenereCipher(message, password, true);
        res.send({ encoded });
    } catch (error) {
        res.status(500).send("An error occurred");
    }
});


passwordsRouter.post('/decode', (req, res) => {
    try {
        const { password, message } = req.body;
        if (!password || !message) {
            return res.status(400).send("Password and message are required");
        }
        const decode = vigenereCipher(message, password, false);
        res.send({ decode });
    } catch (error) {
        res.status(500).send("An error occurred");
    }
});

passwordsRouter.get('/encode', async (req, res) => {
    try {
        const { password, message } = req.query;
        console.log(password , message,"GET_BECKEND")
        if (!password || !message) {
            return res.status(400).send("Password and message are required");
        }
        const encoded = vigenereCipher(message as string, password as string, true);
        res.send({ encoded });
    } catch (error) {
        res.status(500).send("An error occurred");
    }
});


passwordsRouter.get('/decode', async (req, res) => {
    try {
        const { password, message } = req.query;
        if (!password || !message) {
            return res.status(400).send("Password and message are required");
        }
        const decoded = vigenereCipher(message as string, password as string, false);
        res.send({ decoded });
    } catch (error) {
        res.status(500).send("An error occurred");
    }
});


export default passwordsRouter