# Tic-Tac-Toe Application

## Overview
This is a full-stack Tic-Tac-Toe application with a backend API and frontend interface, allowing users to play the classic game. The application is built using modern web technologies.

## Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js (v18 or later)
- npm
- Git

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/PatelYash7/Selcom-Test.git
cd Selcom-Test
```

### 2. Backend Setup
```bash
cd backend
npm install 
```
#### Environment Variables
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=3000
MONGODB_URI=mongodb_database_url
JWT_SECRET=your_secret
JWT_EXPIRES_IN=24h
```
#### Run Backend Server
```bash
npm run dev  # or yarn dev
```
The backend should be running at `http://localhost:5000`

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
#### Run Frontend Server
```bash
npm run dev  # or yarn dev
```
The frontend should be accessible at `http://localhost:5173` (or the port Vite suggests).
