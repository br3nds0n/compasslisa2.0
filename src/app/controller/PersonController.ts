import { Request, Response, NextFunction } from 'express';
import { Controller } from '@decorators/express';
import { Inject } from '@decorators/di';

import PersonService from '../service/PersonService';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonService } from '../interfaces/Person/IPersonService';

@Controller('/people')
class PersonController {
  private readonly personService: IPersonService;

  constructor(@Inject(PersonService) personService: IPersonService) {
    this.personService = personService;
  }
}

export default PersonController;
