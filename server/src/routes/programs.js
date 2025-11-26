import { Router } from 'express';
import { Program } from '../models/Program.js';
import { requireAuth } from '../middleware/requireAuth.js';

export const programsRouter = Router();

programsRouter.get('/', async (req, res) => {
  try {
    const programs = await Program.find().sort({ createdAt: 1 });
    return res.json(programs);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch programs:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

programsRouter.post('/', requireAuth, async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      longDescription,
      meetingFrequency,
      leads = [],
      ctaLabel,
      ctaUrl,
      resourceLinks = [],
      tags = [],
      isFeatured = false,
      heroImageUrl,
    } = req.body;

    if (!title || !shortDescription || !longDescription) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const program = await Program.create({
      title,
      shortDescription,
      longDescription,
      meetingFrequency,
      leads,
      ctaLabel,
      ctaUrl,
      resourceLinks,
      tags,
      isFeatured,
      heroImageUrl,
    });

    return res.status(201).json(program);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to create program:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

programsRouter.delete('/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await Program.findByIdAndDelete(id);
    return res.status(204).end();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to delete program:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


