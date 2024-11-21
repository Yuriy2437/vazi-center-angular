import { Injectable } from '@angular/core';
import { connect, Connection } from 'mongoose';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class MongooseService {
  private connection: Connection | null = null;

  constructor(private configService: ConfigService) {}

  async connect(): Promise<void> {
    if (this.connection) {
      return;
    }

    const uri = this.configService.get('MONGODB_URI');
    if (!uri) {
      throw new Error('MONGODB_URI is not defined');
    }

    try {
      this.connection = (await connect(uri)).connection;
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      throw error;
    }
  }

  getConnection(): Connection {
    if (!this.connection) {
      throw new Error('MongoDB connection not established');
    }
    return this.connection;
  }
}
