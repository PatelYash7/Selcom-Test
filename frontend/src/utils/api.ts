import axios from "axios";
import { TGame } from "./type";

const API_URL = "http://localhost:3000/api";

export const register = async (email: string, password: string) => {
  const response = await axios.post<{
    message: string;
    token:string;
  }>(`${API_URL}/auth/register`, { email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post<{
    token: string;
  }>(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const startGame = async (
  player1: string,
  player2: string,
  token: string
) => {
  const respone = await axios.post<{
    message: string;
    player1: string;
    player2: string;
  }>(
    `${API_URL}/game/start`,
    { player1, player2 },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return respone.data;
};

export const endGame = async (
  player1: string,
  player2: string,
  winner: string,
  token: string
) => {
  const response = await axios.post<{
    message: string;
  }>(
    `${API_URL}/game/end`,
    { player1, player2, winner },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

export const getGameHistory = async (token: string) => {
  const response = await axios.get<TGame[]>(`${API_URL}/game/history`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const getGame = async (gameId: string, token: string) => {
  const response = await axios.post<{
    message: string;
    game: TGame;
  }>(
    `${API_URL}/game/find`,
    {
      gameId,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};
