import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  step: Number,
  customer: String,
  age: Number,
  gender: String,
  zipcodeOri: String,
  merchant: String,
  zipMerchant: String,
  category: String,
  amount: Number,
  fraud: Number,
});

export const Data = mongoose.model("Data", dataSchema);
