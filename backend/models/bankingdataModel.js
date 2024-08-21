import mongoose from "mongoose";

const bankingDataSchema = new mongoose.Schema({
  step: { type: String, required: true },
  customer: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  zipcodeOri: { type: String, required: true },
  merchant: { type: String, required: true },
  zipMerchant: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: String, required: true },
  fraud: { type: String, required: true },
});

export const BankingData = mongoose.model("BankingData", bankingDataSchema);
