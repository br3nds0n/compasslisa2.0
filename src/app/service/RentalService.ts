import { Injectable, Inject } from '@decorators/di';

import RentalRepository from '../repository/RentalRepository';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';
import { IRentalService } from '../interfaces/Rental/IRentalService';

import IsConflit from '../utils/rules/isConflit';

@Injectable()
class RentalService implements IRentalService {
  private rentalRepository: IRentalRepository;

  constructor(@Inject(RentalRepository) rentalRepository: IRentalRepository) {
    this.rentalRepository = rentalRepository;
  }

  async create(payload: IRental): Promise<IRental> {
    const NEW_RENTAL = await this.rentalRepository.create(payload);

    return NEW_RENTAL;
  }
}

export default RentalService;
