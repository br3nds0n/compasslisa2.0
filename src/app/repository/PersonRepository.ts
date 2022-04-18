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

  async readID(id: string): Promise<IPerson> {
    const ID_PERSON = await PersonModel.findById(id);

    return ID_PERSON;
  }

  async update(id: string, payload: IPerson): Promise<IPerson> {
    const NEW_PERSON = await PersonModel.findByIdAndUpdate(id, payload);

    return NEW_PERSON;
  }

  async delete(id: string): Promise<IPerson> {
    const DELETE_PERSON = await PersonModel.findByIdAndDelete(id);

    return DELETE_PERSON;
  }
}

export default PersonRepository;
