import { IPerson } from './IPerson';

export interface IPersonService {
  create: (person: IPerson) => Promise<IPerson>
  read: (payload) => Promise<IPerson | IPerson[]>
}
