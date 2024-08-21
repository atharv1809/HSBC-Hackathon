import jwt from "jsonwebtoken";

const SECRET_KEY = "j4r1v9T7$N2!kLz%a^F1vWqO3*XyB+Z8mC@E7bD5hH0R9pQ6V";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};
