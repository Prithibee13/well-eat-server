import mongoose from "mongoose";
import app from "./app.js";
const port = process.env.PORT || 8000;
mongoose.connect(process.env.DB_URI)
    .then(async () => {
    app.listen(port, () => {
        console.log("practice server running on port:", port);
    });
})
    .catch(err => console.error("Database connection failed", err));

export default app