import { Request, Response } from 'express';
import {
  Controller, Post, Get, Put, Delete,
} from '@decorators/express';
import { Inject } from '@decorators/di';

import PersonService from '../service/PersonService';

import { IPerson } from '../interfaces/Person/IPerson';
import { IPersonService } from '../interfaces/Person/IPersonService';

import ValidationBodyPerson from '../validation/Person/ValidationBodyPerson';
import ValidationQueryPerson from '../validation/Person/ValidationQueryPerson';
import ValidationParamsID from '../validation/ValidationParamsID';

@Controller('/people')
class PersonController {
  private personService: IPersonService;

  constructor(@Inject(PersonService) personService: IPersonService) {
    this.personService = personService;
  }

  @Post('/', [ValidationBodyPerson])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const PERSON: IPerson = req.body;
      const RESULT: IPerson = await this.personService.create(PERSON);

      return res.status(201).json(RESULT);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/', [ValidationQueryPerson])
  async read(req: Request, res: Response): Promise<Response> {
    try {
      const PAYLOAD = req.query;
      const RESULT: IPerson | IPerson[] = await this.personService.read(PAYLOAD);

      return res.status(200).json(RESULT);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/:id', [ValidationParamsID])
  async readID(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const RESULT: IPerson = await this.personService.readID(id);

      return res.status(200).json(RESULT);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Put('/:id', [ValidationParamsID, ValidationBodyPerson])
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const PAYLOAD: IPerson = req.body;

      const RESULT: IPerson = await this.personService.update(id, PAYLOAD);

      return res.status(200).json(RESULT);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Delete('/:id', [ValidationParamsID])
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const RESULT: IPerson = await this.personService.delete(id);

      return res.status(200).json(RESULT);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default PersonController;
