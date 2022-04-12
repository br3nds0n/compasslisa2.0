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

  async readID(id: string): Promise<ICar> {
    const ID_CAR = await CarModel.findById(id);

    return ID_CAR;
  }

  async update(id: string, NewBody: ICar): Promise<ICar> {
    const NEW_BODY = await CarModel.findByIdAndUpdate(id, NewBody);

    return NEW_BODY;
  }
}

export default CarRepository;
