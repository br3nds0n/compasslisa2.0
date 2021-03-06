import { Injectable, Inject } from '@decorators/di';

import PersonRepository from '../repository/PersonRepository';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonRepository } from '../interfaces/Person/IPersonRepository';
import { IPersonService } from '../interfaces/Person/IPersonService';

import IsConflit from '../utils/rules/isConflit';
import NotFound from '../errors/http/NotFound';

@Injectable()
class PersonService implements IPersonService {
  private personRepository: IPersonRepository;

  constructor(@Inject(PersonRepository) personRepository: IPersonRepository) {
    this.personRepository = personRepository;
  }

  async create(person: IPerson): Promise<IPerson> {
    await IsConflit.isMajority(person.data_nascimento);
    await IsConflit.validCpf(person.cpf);
    await IsConflit.conflictCpf(person.cpf);
    await IsConflit.conflictEmail(person.email);

    const NEW_PERSON: IPerson = await this.personRepository.create(person);

    return NEW_PERSON;
  }

  async read(payload): Promise<IPerson | IPerson[]> {
    const ALL_PEOPLE: IPerson | IPerson[] = await this.personRepository.read(payload);

    return ALL_PEOPLE;
  }

  async readID(id: string): Promise<IPerson> {
    const ID_PERSON: IPerson = await this.personRepository.readID(id);

    if (!ID_PERSON) {
      throw new NotFound(`person of id '${id}' not found`);
    }

    return ID_PERSON;
  }

  async update(id: string, payload: IPerson): Promise<IPerson> {
    const NEW_PERSON: IPerson = await this.personRepository.update(id, payload);

    if (!NEW_PERSON) {
      throw new NotFound(`person of id '${id}' not found`);
    }

    return NEW_PERSON;
  }

  async delete(id: string): Promise<IPerson> {
    const DELETE_PERSON: IPerson = await this.personRepository.delete(id);

    if (!DELETE_PERSON) {
      throw new NotFound(`person of id '${id}' not found`);
    }

    return DELETE_PERSON;
  }
}

export default PersonService;
