import { Schema, model, Document } from "mongoose";

interface IGame extends Document {
  player1: string;
  player2: string;
  winner: string;
  createdAt: Date;
  userId: string;
}

const gameSchema = new Schema<IGame>({
  player1: { type: String, required: true },
  player2: { type: String, required: true },
  winner: { type: String },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, ref: "User", required: true },
});

export const Game = model<IGame>("Game", gameSchema);
