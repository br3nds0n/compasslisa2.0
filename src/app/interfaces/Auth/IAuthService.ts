import { IPerson } from '../Person/IPerson';
import { IAuth } from './IAuth';

export interface IAuthService{
  findAuth: (payload: IPerson) => Promise<IAuth>
}
