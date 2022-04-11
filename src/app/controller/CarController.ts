import { Request, Response } from 'express';
import { Controller, Post, Get } from '@decorators/express';
import { Inject } from '@decorators/di';

import CarService from '../service/CarService';

import { ICar } from '../interfaces/Car/ICar';
import { ICarService } from '../interfaces/Car/ICarService';

import ValidationBodyCar from '../validation/Car/ValidationBodyCar';
import ValidationQueryCar from '../validation/Car/ValidationQueryCar';

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
      const RESULT = await this.carService.create(CAR);

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
      const RESULT = await this.carService.read();

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
