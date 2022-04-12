import { Request, Response } from 'express';
import {
  Controller, Post, Get, Put,
} from '@decorators/express';
import { Inject } from '@decorators/di';

import CarService from '../service/CarService';

import { ICar } from '../interfaces/Car/ICar';
import { ICarService } from '../interfaces/Car/ICarService';

import ValidationBodyCar from '../validation/Car/ValidationBodyCar';
import ValidationQueryCar from '../validation/Car/ValidationQueryCar';
import ValidationParamsID from '../validation/ValidationParamsID';

@Controller('/car')
class CarController {
  private carService: ICarService;

  constructor(@Inject(CarService) carService: ICarService) {
    this.carService = carService;
  }

  @Post('/', [ValidationBodyCar])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const CAR: ICar = req.body;
      const RESULT: ICar = await this.carService.create(CAR);

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

  @Get('/', [ValidationQueryCar])
  async read(req: Request, res: Response): Promise<Response> {
    try {
      const RESULT: ICar | ICar[] = await this.carService.read();

      return res.status(200).json(RESULT);
    } catch (error) {
      return res.status(400).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/:id', [ValidationParamsID, ValidationQueryCar])
  async readID(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const RESULT: ICar = await this.carService.readID(id);

      return res.status(200).json(RESULT);
    } catch (error) {
      return res.status(400).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Put('/:id', [ValidationParamsID, ValidationBodyCar])
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const NEW_BODY: ICar = req.body;

      const RESULT: ICar = await this.carService.update(id, NEW_BODY);

      return res.status(200).json(RESULT);
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

export default CarController;
