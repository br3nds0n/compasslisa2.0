import { ICar } from './ICar';

export interface ICarService {
  create: (car: ICar) => Promise<ICar>
  read: () => Promise<ICar | ICar[]>
  readID: (id: string) => Promise<ICar>
  update: (id: string, NewBody: ICar) => Promise<ICar>
  delete: (id: string) => Promise<ICar>
}
