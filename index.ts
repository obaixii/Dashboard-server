import express from 'express'
import * as dotenv from "dotenv";
import { authRouter, productRouter } from "./routes/index";
import { errorHandler } from './middlewares/errorHandler';

const app = express();

const PORT: number = 3000;

// Configs dotenv in server
dotenv.config()


app.use('/', authRouter); // Global Middleware for Auth Routing
app.use('/', productRouter); // Global Middleware for Products Routing


app.use(errorHandler); // Global Middleware for Error Handling

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
});