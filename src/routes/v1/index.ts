import { Router } from 'express';
import { attachControllers } from '@decorators/express';
import swaggerUI from 'swagger-ui-express';

import swaggerDoc from './documentation/swagger.json';

import CarController from '../../app/controller/CarController';
import PersonController from '../../app/controller/PersonController';
import AuthController from '../../app/controller/AuthController';
import RentalController from '../../app/controller/RentalController';

class RoutesV1 {
  static v1(): Router {
    const ROUTER: Router = Router();

    attachControllers(
      ROUTER,
      [
        CarController,
        PersonController,
        AuthController,
        RentalController,
      ],
    );

    ROUTER.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

    return ROUTER;
  }
}

export default RoutesV1;
