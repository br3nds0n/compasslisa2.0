import mongoose from 'mongoose';

class Database {
  static async connect(): Promise<void> {
    try {
      const URI: string = process.env.DATABASE_URI;

      await mongoose.connect(URI);
      console.log('connected to database');
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default Database;
