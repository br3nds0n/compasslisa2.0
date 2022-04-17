import { Injectable } from '@decorators/di';

import PersonModel from '../models/PersonModel';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonRepository } from '../interfaces/Person/IPersonRepository';

@Injectable()
class PersonRepository implements IPersonRepository {
  async create(person: IPerson): Promise<IPerson> {
    const NEW_PERSON = await PersonModel.create(person);

    return NEW_PERSON;
  }
}

export default PersonRepository;
