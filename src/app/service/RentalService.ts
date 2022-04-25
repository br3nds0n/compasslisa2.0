import { Injectable, Inject } from '@decorators/di';

import RentalRepository from '../repository/RentalRepository';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';
import { IRentalService } from '../interfaces/Rental/IRentalService';

import ViaCep from '../api/ViaCep.api';
import IsConflit from '../utils/rules/isConflit';

@Injectable()
class RentalService implements IRentalService {
  private rentalRepository: IRentalRepository;

  constructor(@Inject(RentalRepository) rentalRepository: IRentalRepository) {
    this.rentalRepository = rentalRepository;
  }

  async create(payload: IRental): Promise<IRental> {
    await IsConflit.validCnpj(payload.cnpj);
    await IsConflit.conflitCnpj(payload.cnpj);
    await IsConflit.conflictFilial(payload.endereco);

    await ViaCep.getCep(payload.endereco);

    const NEW_RENTAL = await this.rentalRepository.create(payload);

    return NEW_RENTAL;
  }
}

export default RentalService;
