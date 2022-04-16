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
    const NEW_CAR: ICar = await this.carRepository.create(car);

    return NEW_CAR;
  }

  async read(payload): Promise<ICar | ICar[]> {
    const ALL_CARS: ICar | ICar[] = await this.carRepository.read(payload);

    return ALL_CARS;
  }

  async readID(id: string): Promise<ICar> {
    const ID_CAR: ICar = await this.carRepository.readID(id);

    return ID_CAR;
  }

  async update(id: string, NewBody: ICar): Promise<ICar> {
    const NEW_CAR: ICar = await this.carRepository.update(id, NewBody);

    return NEW_CAR;
  }

  async delete(id: string): Promise<ICar> {
    const DELETE_CAR: ICar = await this.carRepository.delete(id);

    return DELETE_CAR;
  }

  async updateAccessory(id: string, accessoryId: string, payload): Promise<ICar> {
    const NEW_ACCESSORY = await this.carRepository.updateAccessory(id, accessoryId, payload);

    return NEW_ACCESSORY;
  }
}

export default CarService;
