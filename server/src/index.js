import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectToDatabase } from './mongo.js';
import { router as apiRouter } from './routes/index.js';
import { ensureAdminUser } from './utils/ensureAdminUser.js';
import { purgeExpiredSessions } from './utils/sessionStore.js';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'hess-nyu-server' });
});

app.use('/api', apiRouter);

const port = process.env.PORT || 4000;

connectToDatabase()
  .then(() => {
    return ensureAdminUser();
  })
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on http://localhost:${port}`);
    });
    setInterval(purgeExpiredSessions, 10 * 60 * 1000);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to start server due to DB error:', error);
    process.exit(1);
  });


