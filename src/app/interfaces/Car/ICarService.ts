import { ICar } from './ICar';

export interface ICarService {
  create: (car: ICar) => Promise<ICar>
}
