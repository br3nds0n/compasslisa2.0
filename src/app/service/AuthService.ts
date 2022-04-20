import { Injectable, Inject } from '@decorators/di';
import bcrypt from 'bcrypt';

import AuthRepository from '../repository/AuthRepository';
import generateToken from '../utils/token/generateToken';

import { IAuth } from '../interfaces/Auth/IAuth';
import { IPerson } from '../interfaces/Person/IPerson';
import { IAuthRepository } from '../interfaces/Auth/IAuthRepository';
import { IAuthService } from '../interfaces/Auth/IAuthService';

import BadRequest from '../errors/http/BadRequest';
import NotFound from '../errors/http/NotFound';

@Injectable()
class AuthService implements IAuthService {
  private authRepository: IAuthRepository;

  constructor(@Inject(AuthRepository) authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async findAuth(payload: IPerson): Promise<IAuth> {
    const { senha }: IPerson = payload;
    const PERSON: IPerson = await this.authRepository.findAuth(payload.email);

    if (!PERSON) {
      throw new NotFound('email does not exist');
    }

    if (!(await bcrypt.compare(senha, PERSON.senha))) {
      throw new BadRequest('incorrect password');
    }

    const { email, habilitado }: IPerson = PERSON;
    const TOKEN: string = generateToken({ _id: PERSON._id });

    const RESULT: IAuth = { email, habilitado, TOKEN };

    return RESULT;
  }
}

export default AuthService;
