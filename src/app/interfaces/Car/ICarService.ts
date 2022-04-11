import { ICar } from './ICar';

export interface ICarService {
  create: (car: ICar) => Promise<ICar>
  read: () => Promise<ICar | ICar[]>
  readID: (id: strind) => Promise<ICar>
}
