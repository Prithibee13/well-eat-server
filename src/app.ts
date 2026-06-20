import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors'
import dotenv from "dotenv";
import bannerRouter from "./routes/banner.route"
import navRouter from "./routes/nav.route"
const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())


app.use('/bannerSection',bannerRouter)
app.use('/navSection',navRouter)

app.get('/', (req : Request, res: Response) => {
    res.send("Well-Eat server is running")
})

export default app