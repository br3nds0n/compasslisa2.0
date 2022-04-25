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
}

export default RentalRepository;
