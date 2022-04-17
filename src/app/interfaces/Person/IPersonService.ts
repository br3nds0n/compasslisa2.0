import { IPerson } from './IPerson';

export interface IPersonService {
  create: (person: IPerson) => Promise<IPerson>
}
