import { Router } from 'express';
import { authRouter } from './auth.js';
import { eventsRouter } from './events.js';
import { programsRouter } from './programs.js';

export const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'HESS API root' });
});

router.use('/auth', authRouter);
router.use('/events', eventsRouter);
router.use('/programs', programsRouter);

