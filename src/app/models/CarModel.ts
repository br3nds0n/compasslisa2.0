import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

import { ICar } from '../interfaces/Car/ICar';

const CAR_MODEL: Schema = new Schema({

  modelo: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  ano: {
    type: String,
    required: true,
  },
  acessorios: [{
    descricao: {
      type: String,
      required: true,
    },
  }],
  quantidadePassageiros: {
    type: Number,
    min: 1,
    required: true,
  },

});

CAR_MODEL.plugin(paginate);

const CAR = model<ICar>('Veiculos', CAR_MODEL);

export default CAR;
