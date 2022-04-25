import { Request, Response } from 'express';
import { Controller } from '@decorators/express';
import { Inject } from '@decorators/di';

import RentalService from '../service/RentalService';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalService } from '../interfaces/Rental/IRentalService';

@Controller('/rental')
class RentalController {
  private rentalService: IRentalService;

  constructor(@Inject(RentalService) rentalService: IRentalService) {
    this.rentalService = rentalService;
  }
}

export default RentalController;
