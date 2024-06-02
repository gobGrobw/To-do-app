import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Check if connection string exist
if (!MONGO_URI) {
	throw new Error('MONGO_URI is empty');
}

export default async function dbConnect() {
	// If theres a connection skip connection process
	if (mongoose.connection.readyState >= 1) {
		return;
	}

	return mongoose.connect(MONGO_URI);
}

