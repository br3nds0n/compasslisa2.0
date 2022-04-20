import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import CarController from '../../app/controller/CarController';
import PersonController from '../../app/controller/PersonController';
import AuthController from '../../app/controller/AuthController';

class RoutesV1 {
  static v1(): Router {
    const router: Router = Router();

    attachControllers(
      router,
      [
        CarController,
        PersonController,
        AuthController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
