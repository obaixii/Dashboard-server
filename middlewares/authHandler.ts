/*
Middleware for checking if a user is authenticated and authorized to access certain routes.
*/

import { typeAuthHandler } from "../types";


// import jwt from "jsonwebtoken";




// Checks if User is Authentic or not 
export const isAuthenticated = async ({ req, res, next }: typeAuthHandler) => {
    // Destructuring token from req.cookies
    const { token } = req.cookies;

    // If token is unavailable - RETURN
    if (!token) {
        return next(new Error("please Login to get Access"));
    }
    try {
        // Verifies token
        // let decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        // req.user = decoded.user;
    } catch (error) {
        next(error);
    }
    next();
}

// Checks if User is Authorized
export const isAuthorized = (...roles: any[]) => {
    return ({ req, res, next }: typeAuthHandler) => {
        // if Role is unAuthorized - RETURN
        if (!roles.includes(req.user.role)) {
            return next(new Error("Unauthorized User"));
        }
        next();
    }
}