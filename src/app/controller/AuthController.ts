import { Request, Response } from 'express';
import { Controller, Post } from '@decorators/express';

import { Inject } from '@decorators/di';

import AuthService from '../service/AuthService';
import { IAuthService } from '../interfaces/Auth/IAuthService';
import { IPerson } from '../interfaces/Person/IPerson';
import { IAuth } from '../interfaces/Auth/IAuth';

@Controller('/authenticate')
class AuthController {
  private readonly authService: IAuthService;

  constructor(@Inject(AuthService) authService: IAuthService) {
    this.authService = authService;
  }

  @Post('/')
  async authenticate(req: Request, res: Response): Promise<Response> {
    try {
      const payload: IPerson = req.body;
      const auth: IAuth = await this.authService.findAuth(payload);

      return res.status(201).json(auth);
    } catch (error) {
      return res.status(400).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default AuthController;
