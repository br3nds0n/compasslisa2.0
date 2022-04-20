import { IPerson } from '../Person/IPerson';

export interface IAuthRepository {
  findAuth: (email: string) => Promise<IPerson>
}
