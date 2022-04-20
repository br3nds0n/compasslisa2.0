import { Injectable } from '@decorators/di';

import PersonModel from '../models/PersonModel';

import { IPerson } from '../interfaces/Person/IPerson';
import { IAuthRepository } from '../interfaces/Auth/IAuthRepository';

@Injectable()
class AuthRepository implements IAuthRepository {
  private personRepository: typeof PersonModel;

  constructor() {
    this.personRepository = PersonModel;
  }

  async findAuth(email: string): Promise<IPerson> {
    const PERSON: IPerson = await this.personRepository.findOne({ email });

    return PERSON;
  }
}

export default AuthRepository;
