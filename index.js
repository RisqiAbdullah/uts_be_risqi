import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./models/index.js";
import router from "./route/Route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});