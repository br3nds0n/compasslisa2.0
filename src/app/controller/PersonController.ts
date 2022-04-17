import { Request, Response } from 'express';
import { Controller, Post } from '@decorators/express';
import { Inject } from '@decorators/di';

import PersonService from '../service/PersonService';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonService } from '../interfaces/Person/IPersonService';

@Controller('/people')
class PersonController {
  private personService: IPersonService;

  constructor(@Inject(PersonService) personService: IPersonService) {
    this.personService = personService;
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const PERSON: IPerson = req.body;
      const RESULT: IPerson = await this.personService.create(PERSON);

      return res.status(201).json(RESULT);
    } catch (error) {
      return res.status(400).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default PersonController;
