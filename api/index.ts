import express from 'express';
import passwordsRouter from "./routers/passwords";
import cors from 'cors';

const app = express();
const port = 8040;

app.use(cors());
app.use(express.json());
app.use('/passwords', passwordsRouter);

const run = async () => {
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};
run().catch(console.error);