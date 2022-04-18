import { IPerson } from './IPerson';

export interface IPersonRepository {
  create: (person: IPerson) => Promise<IPerson>
  read: (payload) => Promise<IPerson | IPerson[]>
}
