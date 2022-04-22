import { Injectable } from '@decorators/di';

import PersonModel from '../models/PersonModel';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonRepository } from '../interfaces/Person/IPersonRepository';

@Injectable()
class PersonRepository implements IPersonRepository {
  private personRepository: typeof PersonModel;

  constructor() {
    this.personRepository = PersonModel;
  }

  async create(person: IPerson): Promise<IPerson> {
    const NEW_PERSON = await this.personRepository.create(person);

    return NEW_PERSON;
  }

  async read(payload): Promise<IPerson | IPerson[]> {
    const ALL_PEOPLE = await this.personRepository.find(payload);

    return ALL_PEOPLE;
  }

  async readID(id: string): Promise<IPerson> {
    const ID_PERSON = await this.personRepository.findById(id);

    return ID_PERSON;
  }

  async update(id: string, payload: IPerson): Promise<IPerson> {
    const NEW_PERSON = await this.personRepository.findByIdAndUpdate(id, payload);

    return NEW_PERSON;
  }

  async delete(id: string): Promise<IPerson> {
    const DELETE_PERSON = await this.personRepository.findByIdAndDelete(id);

    return DELETE_PERSON;
  }
}

export default PersonRepository;
