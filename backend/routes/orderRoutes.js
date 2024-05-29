import express, { Router } from "express";
import { addOrderItems, getMyOrders, getOrderById, getOrders, updateOrderToDelivered, updateOrderToPaid } from "../controllers/orderController.js";
const router = express.Router()
import {adminAuth, fetchUser} from '../middlewares/fetchUser.js'

console.log('into the routes');

router.route('/').post(fetchUser, addOrderItems).get(fetchUser, adminAuth,  getOrders)
router.route('/myorders').get(fetchUser, getMyOrders)
router.route('/:id').get(fetchUser, getOrderById)
router.route('/:id/pay').put(fetchUser, updateOrderToPaid)
router.route('/:id/deliver').put(fetchUser, adminAuth, updateOrderToDelivered)

export default router