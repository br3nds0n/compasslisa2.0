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

  async read(payload): Promise<ICar | ICar[]> {
    const ALL_CARS = await CarModel.find(payload);

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

  async delete(id: string): Promise<ICar> {
    const DELETE_CAR = await CarModel.findByIdAndDelete(id);

    return DELETE_CAR;
  }

  async updateAccessory(id: string, accessoryId: string, payload): Promise<ICar> {
    const NEW_ACCESSORY = await CarModel.findByIdAndUpdate(
      id,
      { $set: { 'acessorios.$[outer].descricao': payload.descricao } },
      { arrayFilters: [{ 'outer._id': accessoryId }] },
    );
    return NEW_ACCESSORY;
  }
}

export default CarRepository;
