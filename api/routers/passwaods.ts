import express from "express";
const passwordsRouter = express.Router();
passwordsRouter.get('/', async (req, res) => {
    res.send("main page");
});
export default passwordsRouter