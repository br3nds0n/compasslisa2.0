import { Injectable, Inject } from '@decorators/di';

import CarRepository from '../repository/CarRepository';

import { ICar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';
import { ICarService } from '../interfaces/Car/ICarService';

@Injectable()
class CarService implements ICarService {
  private carRepository: ICarRepository;

  constructor(@Inject(CarRepository) carRepository: ICarRepository) {
    this.carRepository = carRepository;
  }

  async create(car: ICar): Promise<ICar> {
    const NEW_CAR = await this.carRepository.create(car);

    return NEW_CAR;
  }
}

export default CarService;
