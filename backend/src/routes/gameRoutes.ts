import { Router, RequestHandler } from "express";
import {
  startGame,
  endGame,
  getGameHistory,
  findGame,
} from "../controllers/gameController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();
router.use(authMiddleware as RequestHandler);
router.post("/start", startGame as RequestHandler);
router.post("/end", endGame as RequestHandler);
router.get("/history", getGameHistory as RequestHandler);
router.get("/find", findGame as RequestHandler);

export default router;
