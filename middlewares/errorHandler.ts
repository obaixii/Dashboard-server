/*
Error handler middleware for Express.js.
Handles various types of errors
Formats error messages appropriately and sends a JSON response with the error message.
*/
import { typeErrorHandler } from "../types";
import { Request, Response, NextFunction } from 'express';


// Error Handler in Express js
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let error = { ...err };
    console.log("1", err);


    // Set error message if it's not defined
    // error.message = err.message

    // console.log("2", error);
    // // // Handling specific errors - Object ID Error
    // if (err.name === 'CastError') {
    //     const message = `Resource not found. Invalid: ${err.path}`;
    //     error = new Error(message);
    // };

    // // // Handling Validation Error
    // if (err.name === 'ValidationError') {
    //     const message: any = Object.values(err.errors).map((value: any) => value.message);
    //     error = new Error(message);
    // };

    // // // Handling Mongoose duplicate key errors
    // if (err.code === 11000) {
    //     const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    //     error = new Error(message);
    // };

    // res.json({
    //     success: false,
    //     message: 'Internal Server Error'
    // });
};