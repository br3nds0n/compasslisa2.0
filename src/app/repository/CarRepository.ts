import { Injectable } from '@decorators/di';

import CarModel from '../models/CarModel';

import { ICar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarRepository implements ICarRepository {
  async create(car: ICar): Promise<ICar> {
    const NEW_CAR = await CarModel.create(car);

    return NEW_CAR;
  }

  async read(): Promise<ICar | ICar[]> {
    const ALL_CARS = await CarModel.find();

    return ALL_CARS;
  }
}

export default CarRepository;
