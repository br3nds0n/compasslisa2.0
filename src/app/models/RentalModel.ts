import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

import { IRental } from '../interfaces/Rental/IRental';

const RENTAL_MODEL: Schema = new Schema(
  {

    nome: {
      type: String,
      required: true,
    },
    cnpj: {
      type: String,
      unique: true,
      minLength: 14,
      maxLength: 14,
      required: true,
    },
    atividades: {
      type: String,
      required: true,
    },
    endereco: [
      {
        cep: { type: String, unique: true, required: true },
        number: { type: String, required: true },
        complemento: { type: String, required: false },
        isFilial: { type: Boolean, required: true },
        logradouro: { type: String, required: false },
        bairro: { type: String, required: false },
        localidade: { type: String, required: false },
        uf: { type: String, required: false },
        _id: false,
      },
    ],

  },
  {
    versionKey: false,
  },
);

RENTAL_MODEL.plugin(paginate);

const CAR = model<IRental>('Locadora', RENTAL_MODEL);

export default CAR;
