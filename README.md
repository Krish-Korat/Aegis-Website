# Aegis Fullstack WAF

This is a fullstack implementation of the Aegis WAF website. It contains a React/Vite frontend and a Node.js/Express backend communicating with MongoDB.

## Features

- Full user authentication (Signup / Login / Logout) with express-sessions.
- Contact form submission stored in MongoDB.
- Frontend ported from static HTML/JS/CSS to React Components.

## Manual Dev Setup

1. Make sure you have MongoDB running locally on port 27017 or update `MONGO_URI` in `.env`.
2. Copy `.env.example` to `.env`.
3. In the root directory, run `npm install`.
4. In the `client` directory, run `npm install`.
5. Start the backend: `npm run dev` in the root (runs `nodemon server.js`).
6. Start the frontend: `npm run dev` in the `client` directory.

## Docker Setup

To run the application and the database inside Docker:

```bash
docker-compose up --build
```

The application will be accessible at http://localhost:5000.
