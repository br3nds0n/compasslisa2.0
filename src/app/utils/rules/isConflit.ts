import PersonModel from '../../models/PersonModel';

import Conflit from '../../errors/http/Conflit';
import BadRequest from '../../errors/http/BadRequest';

import isCpf from './isCpf';
import isYear18 from './isYear18';

class IsConflit {
  static async conflictEmail(email: string): Promise<void> {
    const getEmail = await PersonModel.find({ email });

    if (getEmail.length > 0) {
      throw new Conflit('email already exists');
    }
  }

  static async conflictCpf(cpf: string): Promise<void> {
    const getCpf = await PersonModel.find({ cpf });

    if (getCpf.length > 0) {
      throw new Conflit('cpf already exists');
    }
  }

  static async validCpf(cpf: string): Promise<void> {
    if (isCpf(cpf) === false) {
      throw new BadRequest(`cpf '${cpf}' is invalid`);
    }
  }

  static async isMajority(birthday: string): Promise<void> {
    const GET_DATE = birthday;
    const DATE = GET_DATE.substring(5, 10);

    if (isYear18(new Date(DATE)) === false) {
      throw new BadRequest('must be over 18 years old');
    }
  }
}

export default IsConflit;
