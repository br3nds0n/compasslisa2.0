import { Injectable } from '@decorators/di';

import RentalModel from '../models/RentalModel';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';

@Injectable()
class RentalRepository implements IRentalRepository {
  private rentalRepository: typeof RentalModel;

  constructor() {
    this.rentalRepository = RentalModel;
  }

  async create(payload: IRental): Promise<IRental> {
    const NEW_RENTAL = await this.rentalRepository.create(payload);

    return NEW_RENTAL;
  }

  async read(payload): Promise<IRental | IRental[]> {
    const ALL_RENTAL = await this.rentalRepository.find(payload);

    return ALL_RENTAL;
  }

  async readID(id: string): Promise<IRental> {
    const ID_RENTAL = await this.rentalRepository.findById(id);

    return ID_RENTAL;
  }

  async update(id: string, payload: IRental): Promise<IRental> {
    const NEW_RENTAL = await this.rentalRepository.findByIdAndUpdate(id, payload);

    return NEW_RENTAL;
  }

  async delete(id: string): Promise<IRental> {
    const DELETE_RENTAL = await this.rentalRepository.findByIdAndDelete(id);

    return DELETE_RENTAL;
  }
}

export default RentalRepository;
