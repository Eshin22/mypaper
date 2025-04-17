import mongoose, { Schema, Document } from 'mongoose';
// models/Paper.ts
export interface Paper {
  _id: string;
  title: string;
  status: string;
  assignedDate: string;
  dueDate: string;
  reviewCycle: number;
}


// Define the interface for the Paper document
interface IPaper extends Document {
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedDate: Date;
  dueDate: Date;
  reviewCycle: number;
}

// Define the schema for Paper
const PaperSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
    assignedDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    reviewCycle: {
      type: Number,
      min: 1,
      max: 3,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Export the model, using the interface for type safety
export default mongoose.models.Paper || mongoose.model<IPaper>('Paper', PaperSchema);
