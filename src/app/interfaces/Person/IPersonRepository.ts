import { IPerson } from './IPerson';

export interface IPersonRepository {
  create: (person: IPerson) => Promise<IPerson>
}
