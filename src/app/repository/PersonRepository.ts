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

  async read(payload): Promise<IPerson | IPerson[]> {
    const ALL_PEOPLE = await PersonModel.find(payload);

    return ALL_PEOPLE;
  }
}

export default PersonRepository;
