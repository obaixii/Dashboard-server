import express from "express";

// Imported Controllers from userControllers 
import { login, logout } from "../controllers/credentialController";

export const authRouter = express.Router();

// For Registration
// authRouter.route("/sign-up").post(register);

// For Login User
authRouter.route("/login").post(login);

// For Logout User
authRouter.route("/logout").post(logout);

export default authRouter; 
