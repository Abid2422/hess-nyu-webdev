# HESS NYU Web

Monorepo with React client and Express server.

## Local development

1. Create `server/.env` with:

```
PORT=4000
MONGODB_URI=your-atlas-connection-string
MONGODB_DB=hess
CORS_ORIGIN=http://localhost:5173
```

2. Install deps and start both apps:

```
npm install
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:4000 (health: `/health`)

## Deployment (Vercel)

- Frontend: connect `client/` as a Vercel project (build: `npm run build`, output: `dist`).
- Backend: either deploy as a separate service (e.g., Render/Fly/Heroku) or adapt Express to Vercel serverless functions.

This repository will be the code base for Hess Nyu's website
