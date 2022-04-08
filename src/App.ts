import express, { Express } from 'express';

import database from './infra/database/mongo';
import routes from './routes';
import ErrorHandle from './app/middlewares/ErrorHandle';

class App {
  readonly express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  static async init() {
    const app: App = new App();
    await database.connect();

    return app.express;
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes(): void {
    this.express.use('/api', routes.init());
  }

  errorHandler(): void {
    this.express.use(ErrorHandle);
  }
}

export default App;
