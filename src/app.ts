import express from 'express';
import cors from 'cors'
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())

app.get('/', (req : Request, res: Response) => {
    res.send("Well-Eat server is running")
})

export default app