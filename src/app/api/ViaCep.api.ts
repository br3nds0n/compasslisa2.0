import axios, { AxiosResponse } from 'axios';

import { IData } from '../interfaces/Rental/IData';

class ViaCep {
  static async getCep(cep: string): Promise<IData> {
    const GET_CEP = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const RESULT: AxiosResponse = GET_CEP;

    return RESULT.data;
  }
}
export default ViaCep;
