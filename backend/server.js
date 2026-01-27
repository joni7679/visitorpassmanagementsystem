const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const empRoutes = require("./src/routes/emp.routes");
const visitRoutes = require("./src/routes/visitor.routes");
const secutityRoutes = require("./src/routes/pass.routes")
const cookieParser = require("cookie-parser");
dotenv.config();
const cors = require("cors")
const app = express();
connectToDb();
console.log(process.env.CLIENT_URL || "http://localhost:5173");
app.set("trust proxy", 1)
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
app.use("/api/security", secutityRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
