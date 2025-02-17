import {
  Request,
  Response,
  NextFunction,
} from "express";
import { verifyToken } from "../config/jwt";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const decoded = verifyToken(token);
  req.body.userId = decoded.userId;
  next();
};
export default authMiddleware;
