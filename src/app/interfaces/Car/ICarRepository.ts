import { ICar } from './ICar';

export interface ICarRepository {
  create: (car: ICar) => Promise<ICar>
  read: () => Promise<ICar | ICar[]>
}
