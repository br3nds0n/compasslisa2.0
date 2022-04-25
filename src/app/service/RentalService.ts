import { Injectable, Inject } from '@decorators/di';

import RentalRepository from '../repository/RentalRepository';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';
import { IRentalService } from '../interfaces/Rental/IRentalService';

@Injectable()
class RentalService implements IRentalService {
  private rentalRepository: IRentalRepository;

  constructor(@Inject(RentalRepository) rentalRepository: IRentalRepository) {
    this.rentalRepository = rentalRepository;
  }
}

export default RentalService;
