import { Request, Response, NextFunction } from 'express';
import { Controller } from '@decorators/express';
import { Inject } from '@decorators/di';

import CarService from '../service/CarService';

import { ICar } from '../interfaces/Car/ICar';
import { ICarService } from '../interfaces/Car/ICarService';

@Controller('/car')
class CarController {
  private readonly carService: ICarService;

  constructor(@Inject(CarService) carService: ICarService) {
    this.carService = carService;
  }
}

export default CarController;
