import { IPerson } from '../Person/IPerson';

export interface IAuthService{
  findAuth: (payload: IPerson) => Promise<IAuth>
}
