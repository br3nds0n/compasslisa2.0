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
}

export default CarRepository;
