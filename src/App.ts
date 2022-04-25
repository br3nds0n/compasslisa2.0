import express, { Express } from 'express';
import cors from 'cors';

import database from './infra/database/mongo';
import routes from './routes';
import ErrorHandle from './app/middlewares/ErrorHandle';

class App {
  private express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  static async start() {
    const app: App = new App();
    await database.connect();

    return app.express;
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use('/api', routes.init());
  }

  private errorHandler(): void {
    this.express.use(ErrorHandle);
  }
}

export default App;
