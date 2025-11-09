import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    preferredName: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    school: {
      type: String,
      trim: true,
    },
    graduationYear: {
      type: Number,
      min: 1900,
      max: 2100,
    },
    pronouns: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    instagramHandle: {
      type: String,
      trim: true,
    },
    linkedinUrl: {
      type: String,
      trim: true,
    },
    headshotUrl: {
      type: String,
      trim: true,
    },
    tags: [{
      type: String,
      trim: true,
      lowercase: true,
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

memberSchema.virtual('fullName').get(function getFullName() {
  return `${this.firstName} ${this.lastName}`;
});

export const Member = mongoose.models.Member || mongoose.model('Member', memberSchema);


