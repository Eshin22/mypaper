import mongoose, { ConnectOptions, Mongoose } from "mongoose";

// Ensure that MONGODB_URI is available
const MONGODB_URI = "mongodb://localhost:27017/MyPaper";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cachedDb: Mongoose | null = null;

export async function connectToDatabase(): Promise<Mongoose> {
  if (cachedDb) {
    return cachedDb;
  }

  // Connect to the MongoDB database with the specified options
  const db = await mongoose.connect(MONGODB_URI);

  cachedDb = db;
  return db;
}
