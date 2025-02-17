import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { verifyToken } from '../config/jwt';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = verifyToken(token);
    console.log(decoded)
    req.body.userId=decoded.userId;
    next();
}
export default authMiddleware;