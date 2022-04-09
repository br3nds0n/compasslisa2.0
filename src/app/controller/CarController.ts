import { Request, Response, NextFunction } from 'express';
import { Controller, Post } from '@decorators/express';
import { Inject } from '@decorators/di';

import CarService from '../service/CarService';

import { ICar } from '../interfaces/Car/ICar';
import { ICarService } from '../interfaces/Car/ICarService';

import ValidationBodyCar from '../validation/Car/ValidationBodyCar';

@Controller('/car')
class CarController {
  private readonly carService: ICarService;

  constructor(@Inject(CarService) carService: ICarService) {
    this.carService = carService;
  }

  @Post('/', [ValidationBodyCar])
  async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
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
}

export default CarController;
