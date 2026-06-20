import mongoose from "mongoose";
import app from "../src/app";

await mongoose.connect(process.env.DB_URI!);

export default app;