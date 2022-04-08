import { Injectable, Inject } from '@decorators/di';

import CarRepository from '../repository/CarRepository';

import { ICar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';
import { ICarService } from '../interfaces/Car/ICarService';

@Injectable()
class CarService implements ICarService {
  private readonly carRepository: ICarRepository;

  constructor(@Inject(CarRepository) carRepository: ICarRepository) {
    this.carRepository = carRepository;
  }
}

export default CarService;
