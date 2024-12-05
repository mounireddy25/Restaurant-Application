import mongoose from 'mongoose';
import { config } from 'dotenv';

// Load .env file from the 'config' folder
config({ path: './config/.env' });  // Ensure this points to the correct location of the .env file

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error('MONGO_URI is not defined in the .env file');
    process.exit(1); // Exit the process if MONGO_URI is missing
  }

  mongoose
    .connect(mongoURI, {
      dbName: 'RESERVATIONS',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to database!');
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to the database: ${err}`);
      process.exit(1); // Exit on failure
    });
};
