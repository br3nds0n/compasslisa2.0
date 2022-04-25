import { IRental } from './IRental';

export interface IRentalRepository {
  create: (payload: IRental) => Promise<IRental>
  read: (payload) => Promise<IRental | IRental[]>
  readID: (id: string) => Promise<IRental>
}
