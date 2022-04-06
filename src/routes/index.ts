import { Router } from 'express';

import routes from './v1';

class Routes {
  static init(): Router {
    const router: Router = Router();

    router.use('/v1', routes.v1());

    return router;
  }
}

export default Routes;
