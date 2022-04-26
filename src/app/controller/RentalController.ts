import { Request, Response } from 'express';
import {
  Controller, Get, Post, Put, Delete,
} from '@decorators/express';
import { Inject } from '@decorators/di';

import RentalService from '../service/RentalService';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalService } from '../interfaces/Rental/IRentalService';

import validationBodyRental from '../validation/Rental/ValidationBodyRental';
import validationQueryRental from '../validation/Rental/ValidationQueryRental';
import ValidationParamsID from '../validation/ValidationParamsID';

@Controller('/rental')
class RentalController {
  private rentalService: IRentalService;

  constructor(@Inject(RentalService) rentalService: IRentalService) {
    this.rentalService = rentalService;
  }

  @Post('/', [validationBodyRental])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const PAYLOAD: IRental = req.body;
      const RESULT: IRental = await this.rentalService.create(PAYLOAD);

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

  @Get('/', [validationQueryRental])
  async read(req: Request, res: Response): Promise<Response> {
    try {
      const PAYLOAD = req.query;
      const RESULT: IRental | IRental[] = await this.rentalService.read(PAYLOAD);

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
      const RESULT: IRental = await this.rentalService.readID(id);

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

  @Put('/:id', [ValidationParamsID, validationBodyRental])
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const PAYLOAD: IRental = req.body;

      const RESULT: IRental = await this.rentalService.update(id, PAYLOAD);

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
      const RESULT: IRental = await this.rentalService.delete(id);

      return res.status(204).json(RESULT);
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

export default RentalController;
