import { Request, Response } from "express";
import { Game } from "../models/Game";

export const startGame = async (req: Request, res: Response) => {
  const { player1, player2 } = req.body;
  try {
    // const game = await Game.create({ player1, player2, winner:"" });
    if(true){
        res.status(200).json({ message: "Game started", player1, player2});
    }else{
        throw new Error("Error Starting Game")
    }
  } catch (error) {
    res.status(500).json({ error: "Error starting game" });
  }
};

export const endGame = async (req: Request, res: Response) => {
  const { player1, player2, winner,userId } = req.body;
  try {
    const game = await Game.create({ player1, player2, winner,userId });
    if (game) {
      res.status(201).json({ message: "Game result saved" });
    } else {
      throw new Error("Error Saving Game Result");
    }
  } catch (error) {
    res.status(500).json({ error: "Error saving game result" });
  }
};
export const findGame = async(req:Request,res:Response)=>{
    const {gameId}=req.body;
    try{
        const game = await Game.findOne({
            _id:gameId
        });
        if(game){
            res.status(200).json({message:"Game Found",game})
        }else{
            throw new Error("Game Not Found")
        }
    }catch(error){
        res.status(500).json({error:"Error Finding Game"})
    }
}
export const getGameHistory = async (req: Request, res: Response) => {
    const {userId}=req.body;
  try {
    const games = await Game.find({userId:userId}).sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Error fetching game history" });
  }
};
