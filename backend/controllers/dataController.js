import { Data } from "../models/dataModel.js";
import { BankingData } from "../models/bankingDataModel.js";

export const getData = async (req, res) => {
  try {
    const { category, minAmount, maxAmount } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (minAmount) filter.amount = { $gte: Number(minAmount) };
    if (maxAmount) filter.amount = { $lte: Number(maxAmount) };
    const data = await Data.find(filter);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDataByCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;
    const data = await Data.find({ customer: customerId });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNonFraudCount = async (req, res) => {
  try {
    const fraudCount = await BankingData.countDocuments({ fraud: "1" });
    const nonFraudCount = await BankingData.countDocuments({ fraud: "0" });
    res.json({
      frauds: fraudCount,
      nonFrauds: nonFraudCount,
    });
  } catch (error) {
    console.error("Error fetching non-fraud count:", error);
    res.status(500).send("Server Error");
  }
};
