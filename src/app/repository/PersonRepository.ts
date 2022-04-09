import { Injectable } from '@decorators/di';

import PersonModel from '../models/PersonModel';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonRepository } from '../interfaces/Person/IPersonRepository';

@Injectable()
class PersonRepository implements IPersonRepository {

}

export default PersonRepository;
