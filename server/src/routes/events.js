import { Router } from 'express';
import { Event } from '../models/Event.js';
import { requireAuth } from '../middleware/requireAuth.js';

export const eventsRouter = Router();

eventsRouter.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const query = {};
    if (status) {
      query.status = status;
    }

    const events = await Event.find(query).sort({ startAt: status === 'past' ? -1 : 1 });
    return res.json(events);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch events:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

eventsRouter.post('/', requireAuth, async (req, res) => {
  try {
    const {
      title,
      summary,
      description,
      status,
      startAt,
      endAt,
      location,
      details,
      tags = [],
      isFeatured = false,
      rsvpUrl,
      coverImageUrl,
      displayDate,
    } = req.body;

    if (!title || !status || !startAt || !location || !displayDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const event = await Event.create({
      title,
      summary,
      description,
      status,
      startAt,
      endAt,
      location,
      details,
      tags,
      isFeatured,
      rsvpUrl,
      coverImageUrl,
      displayDate,
    });

    return res.status(201).json(event);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to create event:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

eventsRouter.delete('/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    return res.status(204).end();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to delete event:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


