const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors")
dotenv.config();
const app = express();
connectToDb();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials: true
}))
app.get("/", (req, res) => {
    res.send("backend server is running!")
})
app.use("/api/auth", authRoutes)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
