import PersonModel from '../../models/PersonModel';
import RentalModel from '../../models/RentalModel';

import Conflit from '../../errors/http/Conflit';
import BadRequest from '../../errors/http/BadRequest';

import { IData } from '../../interfaces/Rental/IData';

import isCpf from './isCpf';
import isYear18 from './isYear18';
import isCnpj from './isCnpj';

class IsConflit {
  static async conflictEmail(email: string): Promise<void> {
    const GET_EMAIL = await PersonModel.find({ email });

    if (GET_EMAIL.length > 0) {
      throw new Conflit(`email '${email}' already exists`);
    }
  }

  static async conflictCpf(cpf: string): Promise<void> {
    const GET_CPF = await PersonModel.find({ cpf });

    if (GET_CPF.length > 0) {
      throw new Conflit(`cpf '${cpf}' already exists`);
    }
  }

  static async validCpf(cpf: string): Promise<void> {
    if (isCpf(cpf) === false) {
      throw new BadRequest(`cpf '${cpf}' is invalid`);
    }
  }

  static async isMajority(birthday: string): Promise<void> {
    const GET_DATE = birthday;
    const DATE: string = GET_DATE.substring(5, 10);

    if (isYear18(new Date(DATE)) === false) {
      throw new BadRequest('must be over 18 years old');
    }
  }

  static async conflitCnpj(cnpj: string): Promise<void> {
    const GET_CNPJ = await RentalModel.find({ cnpj });

    if (GET_CNPJ.length > 0) {
      throw new Conflit(`cnpj '${cnpj}' already exists`);
    }
  }

  static async validCnpj(cnpj: string): Promise<void> {
    if (isCnpj(cnpj) === false) {
      throw new BadRequest(`cpf '${cnpj}' is invalid`);
    }
  }

  static async conflictFilial(filial: IData[]): Promise<void> {
    let count: number = 0;
    filial.forEach((body) => {
      if (!body.isFilial) {
        count++;
      }
      if (count > 1) {
        throw new Conflit(`branch '${filial}' already exists`);
      }
    });
  }
}

export default IsConflit;
