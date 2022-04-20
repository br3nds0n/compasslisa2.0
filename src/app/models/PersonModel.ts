import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import paginate from 'mongoose-paginate-v2';

import { IPerson } from '../interfaces/Person/IPerson';
import able from '../utils/constants/isAble';

const PERSON_MODEL: Schema = new Schema(
  {

    nome: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      unique: true,
      required: true,
    },
    data_nascimento: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    senha: {
      type: String,
      minLength: 6,
      required: true,
    },
    habilitado: {
      type: String,
      enum: able,
      required: true,
    },

  },
  {
    versionKey: false,
  },
);

PERSON_MODEL.plugin(paginate);

PERSON_MODEL.pre('save', async function (next): Promise<void> {
  const hash: string = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

const PERSON = model<IPerson>('Pessoas', PERSON_MODEL);

export default PERSON;
