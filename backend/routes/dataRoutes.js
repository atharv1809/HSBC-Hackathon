import express from "express";
import {
  getData,
  getDataByCustomer,
  getNonFraudCount,
} from "../controllers/dataController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/data", authMiddleware, getData);
router.get("/data/customer/:customerId", authMiddleware, getDataByCustomer);
router.get("/data/total-frauds", getNonFraudCount);

export default router;
