/*
Controller for managing product-related operations such as creating, fetching, editing, and deleting products.
*/

import { typeProductParams } from "../types";

// import { Schema } from "../model/Schema.js"
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";



// Adding New Product
export const createProduct = async ({ req, res, next }: typeProductParams) => {
    try {
        // Hashing Password before sending to DB
        // const hash = await bcrypt.hash(req.body.password, 10);
        // req.body.password = hash;

        // const newProduct = await Schema.create(req.body);
        // if (newProduct) {

        res.json({
            message: "New Product has been Added Successfully"
        });
        // }
    } catch (error) {
        next(error);
        return;
    }
}

// Getting All Product
export const getAllProducts = async ({ req, res, next }: typeProductParams) => {
    try {
        // const product = await Schema.find(req.body);
        res.json({
            message: "All Product has been Fetched Successfully"
        });
    } catch (error) {
        next(error);
        return;
    }
}

// Getting Single Product by Id
export const getProductById = async ({ req, res, next }: typeProductParams) => {
    try {
        // const { id } = req.params;
        // const product = await Schema.findById(id);
        res.json({
            message: "Product has been Fetched by ID Successfully"
        });
    } catch (error) {
        next(error);
        return;
    }
}

// Editing Product
export const editProduct = async ({ req, res, next }: typeProductParams) => {
    try {
        // const { id } = req.params;
        // await Schema.findByIdAndUpdate(id, req.body)
        res.send({
            message: 'Product has been Updated Successfully'
        });
    } catch (error) {
        next(error);
        return;
    }
}

// Deleting Product
export const deleteProduct = async ({ req, res, next }: typeProductParams) => {
    try {
        // const { id } = req.params;
        // const productById = await Schema.findByIdAndDelete(id)
        // productById.delete(id);
        res.send({
            message: 'Product has been Deleted Successfully'
        });
    } catch (error) {
        next(error);
        return;
    }
}
