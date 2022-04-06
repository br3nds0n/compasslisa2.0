import { Router } from 'express';
import { attachControllers } from '@decorators/express';

/*

  import controllers

*/

class RoutesV1 {
  static v1(): Router {
    const router: Router = Router();

    attachControllers(
      router,
      [
        /*
          Controller
        */
      ],
    );
    return router;
  }
}

export default RoutesV1;
