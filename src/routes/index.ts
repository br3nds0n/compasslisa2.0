import { Router } from 'express';

import routes from './v1';

class Routes {
  static init(): Router {
    const ROUTER: Router = Router();

    ROUTER.use('/v1', routes.v1());

    return ROUTER;
  }
}

export default Routes;
