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

    const NEW_RENTAL: IRental = await this.rentalRepository.create(payload);

    return NEW_RENTAL;
  }

  async read(payload): Promise<IRental | IRental[]> {
    const ALL_RENTAL: IRental | IRental[] = await this.rentalRepository.read(payload);

    return ALL_RENTAL;
  }

  async readID(id: string): Promise<IRental> {
    const ID_RENTAL: IRental = await this.rentalRepository.readID(id);

    return ID_RENTAL;
  }

  async update(id: string, payload: IRental): Promise<IRental> {
    const NEW_RENTAL = await this.rentalRepository.update(id, payload);

    return NEW_RENTAL;
  }

  async delete(id: string): Promise<IRental> {
    const DELETE_RENTAL = await this.rentalRepository.delete(id);

    return DELETE_RENTAL;
  }
}

export default RentalService;
