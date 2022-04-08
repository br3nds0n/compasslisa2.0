import { Injectable } from '@decorators/di';

import CarModel from '../models/CarModel';

import { ICar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarRepository implements ICarRepository {

}

export default CarRepository;
