import { Request, Response, NextFunction } from 'express';
import { Middleware } from '@decorators/express';
import jwt from 'jsonwebtoken';

import auth from '../config/authenticate.json';
import Unauthorized from '../errors/http/Unauthorized';

class TokenBerer implements Middleware {
  use(req: Request, res: Response, next: NextFunction): void {
    try {
      const TOKEN: string = req.headers.authorization.split(' ')[1];
      jwt.verify(TOKEN, auth.secret);

      return next();
    } catch (error) {
      throw new Unauthorized(error.message);
    }
  }
}

export default TokenBerer;
