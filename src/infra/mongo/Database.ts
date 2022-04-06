import mongoose from 'mongoose';

class Database {
  static async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.DATABASE_URI);
      console.log('Connected to database');
      
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default Database;