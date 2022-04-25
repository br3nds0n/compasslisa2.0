import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import CarController from '../../app/controller/CarController';
import PersonController from '../../app/controller/PersonController';
import AuthController from '../../app/controller/AuthController';
import RentalController from '../../app/controller/RentalController';

class RoutesV1 {
  static v1(): Router {
    const router: Router = Router();

    attachControllers(
      router,
      [
        CarController,
        PersonController,
        AuthController,
        RentalController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
