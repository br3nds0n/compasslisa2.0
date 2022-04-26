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

RENTAL_MODEL.method('toJSON', function () {
  const { ...rental } = this.toObject();

  rental.cnpj = rental.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

  return rental;
});

const CAR = model<IRental>('Locadora', RENTAL_MODEL);

export default CAR;
