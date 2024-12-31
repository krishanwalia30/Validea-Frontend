import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in your environment variables");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ideaValidationAgent",
      connectTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000, // 45 seconds
      // Retry connection logic
      retryWrites: true,
      retryReads: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Database connection failed: ", error);
    // Don't exit the process, instead throw the error to be handled by the API route
    throw new Error(`Unable to connect to MongoDB: ${error.message}`);
  }
}

export default dbConnect;
