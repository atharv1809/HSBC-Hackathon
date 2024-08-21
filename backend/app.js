// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./dbConfig/connectDB.js";

// dotenv.config();

// connectDB();

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Ecommerce App</h1>");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import connectDB from "./dbConfig/connectDB.js";
// import authRoutes from "./routes/authRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";
import { config } from "./utils/config.js";

const app = express();

connectDB();

app.use(express.json());
// app.use("/auth", authRoutes);
app.use("/api", dataRoutes);

// try {
//   const conn = await mongoose.connect(process.env.MONGODB_URI, {
//     dbName: "banking",
//   });
//   console.log(`Connected to Mongodb ${conn.connection.host}`);
// } catch (error) {
//   console.log(`Error in MongoBD connection ${error}`);
// }

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
