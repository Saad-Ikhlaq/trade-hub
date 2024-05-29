import express from "express";
import {
  createProductReview,
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getTopProducts,
} from "../controllers/productController.js";
import { adminAuth, fetchUser } from "../middlewares/fetchUser.js";

const router = express.Router();

router.route("/").get(getProducts).post(fetchUser, adminAuth, createProduct);
router.get('/top', getTopProducts)
router.route("/:id/reviews").post(fetchUser, createProductReview);
router
  .route("/:id")
  .get(getProductById)
  .put(fetchUser, adminAuth, updateProduct)
  .delete(fetchUser, adminAuth, deleteProduct);

export default router;
