import express from "express";

// Imported Controllers from userControllers 
import { createProduct, getAllProducts, getProductById, editProduct, deleteProduct } from "../controllers/productsController";

// Imported Handlers from authHandler - for Authentication & Authorization
// import { isAuthenticated, isAuthorized } from "../middlewares/authHandler.js";

const productRouter = express.Router();

// For Adding New Product 
productRouter.route("/add-product").post(createProduct); // For Testing

// For All Products 
productRouter.route("/products").get(getAllProducts); // For Testing

// For Single Product by Id 
productRouter.route("/product/:id").get(getProductById); // For Testing

// For Editing Product 
productRouter.route("/edit-product/:id").put(editProduct); // For Testing

// For Deleting Product 
productRouter.route("/delete-product/:id").delete(deleteProduct); // For Testing

export default productRouter; 