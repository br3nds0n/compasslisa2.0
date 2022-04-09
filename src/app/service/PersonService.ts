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
}

export default PersonService;
