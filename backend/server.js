const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const empRoutes = require("./src/routes/emp.routes");
const visitRoutes = require("./src/routes/visitor.routes");
const cookieParser = require("cookie-parser");
dotenv.config();
const cors = require("cors")
const app = express();
connectToDb();
console.log(process.env.CLIENT_URL);

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("backend server is running!")
})
app.use("/api/auth", authRoutes)
app.use("/api/emp", empRoutes)
app.use("/api/visit", visitRoutes)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
