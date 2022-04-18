import { Injectable, Inject } from '@decorators/di';

import PersonRepository from '../repository/PersonRepository';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonRepository } from '../interfaces/Person/IPersonRepository';
import { IPersonService } from '../interfaces/Person/IPersonService';

@Injectable()
class PersonService implements IPersonService {
  private personRepository: IPersonRepository;

  constructor(@Inject(PersonRepository) personRepository: IPersonRepository) {
    this.personRepository = personRepository;
  }

  async create(person: IPerson): Promise<IPerson> {
    const NEW_PERSON: IPerson = await this.personRepository.create(person);

    return NEW_PERSON;
  }

  async read(payload): Promise<IPerson | IPerson[]> {
    const ALL_PEOPLE: IPerson | IPerson[] = await this.personRepository.read(payload);

    return ALL_PEOPLE;
  }

  async readID(id: string): Promise<IPerson> {
    const ID_PERSON: IPerson = await this.personRepository.readID(id);

    return ID_PERSON;
  }

  async update(id: string, payload: IPerson): Promise<IPerson> {
    const NEW_PERSON: IPerson = await this.personRepository.update(id, payload);

    return NEW_PERSON;
  }
}

export default PersonService;
