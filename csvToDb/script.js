const mongoose = require("mongoose");
const csvtojson = require("csvtojson");
const path = require("path");
require("dotenv").config();

const uri =
  "mongodb+srv://atharvbhadange18:atharv18@atharv.npliqod.mongodb.net/?retryWrites=true&w=majority&appName=atharv";
mongoose
  .connect(uri, {
    dbName: "banking",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const DataModel = mongoose.model(
  "Data",
  new mongoose.Schema({}, { strict: false }),
  "bankingData"
);
csvtojson()
  .fromFile(path.join(__dirname, "HSBC.csv"))
  .then((csvData) => {
    DataModel.insertMany(csvData)
      .then(() => {
        console.log("Data imported successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("Error inserting data:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => console.error("Error converting CSV to JSON:", err));
