import { Injectable } from '@decorators/di';

import CarModel from '../models/CarModel';

import { ICar } from '../interfaces/Car/ICar';
import { ICarReposiotory } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarRepository implements ICarReposiotory {

}

export default CarRepository;
