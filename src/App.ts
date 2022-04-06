import express, { Express } from 'express';

import database from './infra/mongo';
import routes from './routes';

class App {
  readonly express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
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
}

export default App;
