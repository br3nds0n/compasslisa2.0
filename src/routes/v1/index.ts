import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import CarController from '../../app/controller/CarController';
import PersonRepository from '../../app/repository/PersonRepository';

class RoutesV1 {
  static v1(): Router {
    const router: Router = Router();

    attachControllers(
      router,
      [
        CarController,
        PersonRepository,
      ],
    );
    return router;
  }
}

export default RoutesV1;
