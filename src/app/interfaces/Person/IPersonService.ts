import { IPerson } from './IPerson';

export interface IPersonService {
  create: (person: IPerson) => Promise<IPerson>
  read: (payload) => Promise<IPerson | IPerson[]>
  readID: (id: string) => Promise<IPerson>
  update: (id: string, payload: IPerson) => Promise<IPerson>
  delete: (id: string) => Promise<IPerson>
}
