import { Router, Request, Response, RequestHandler } from "express";
import { register, login } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/register", register as RequestHandler);
authRouter.post("/login", login as RequestHandler);

export default authRouter;
