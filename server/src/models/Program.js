import mongoose from 'mongoose';

const programSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    longDescription: {
      type: String,
      trim: true,
    },
    meetingFrequency: {
      type: String,
      trim: true,
    },
    leads: [{
      type: String,
      trim: true,
    }],
    ctaLabel: {
      type: String,
      trim: true,
    },
    ctaUrl: {
      type: String,
      trim: true,
    },
    resourceLinks: [{
      label: {
        type: String,
        trim: true,
      },
      url: {
        type: String,
        trim: true,
      },
    }],
    tags: [{
      type: String,
      trim: true,
      lowercase: true,
    }],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    heroImageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Program = mongoose.models.Program || mongoose.model('Program', programSchema);


