import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['upcoming', 'past'],
      required: true,
      default: 'upcoming',
      index: true,
    },
    startAt: {
      type: Date,
      required: true,
    },
    endAt: {
      type: Date,
    },
    location: {
      type: String,
      trim: true,
    },
    tags: [{
      type: String,
      trim: true,
      lowercase: true,
    }],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    rsvpUrl: {
      type: String,
      trim: true,
    },
    coverImageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);


