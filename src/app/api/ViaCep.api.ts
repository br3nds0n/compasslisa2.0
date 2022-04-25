import axios, { AxiosResponse } from 'axios';

import { IData } from '../interfaces/Rental/IData';

class ViaCep {
  static async consumeApi(cep: string): Promise<IData> {
    const GET_CEP: AxiosResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const RESULT: AxiosResponse = GET_CEP;

    return RESULT.data;
  }

  static async getCep(payload): Promise<void> {
    for (let i = 0; i < payload.length; i++) {
      const CEPS: IData[] = payload;

      const RESULT: IData = CEPS[i];
      const DATA: IData = await ViaCep.consumeApi(RESULT.cep);

      const {
        cep, logradouro, complemento, bairro, localidade, uf,
      } = DATA;

      RESULT.cep = cep;
      RESULT.logradouro = logradouro;
      RESULT.complemento = complemento;
      RESULT.bairro = bairro;
      RESULT.localidade = localidade;
      RESULT.uf = uf;
    }
  }
}

export default ViaCep;
