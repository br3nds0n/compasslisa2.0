import Joi, { ObjectSchema } from 'joi';
import Date from '@joi/date';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';

import { IPerson } from '../../interfaces/Person/IPerson';
import domain from '../../utils/constants/isDomain';
import able from '../../utils/constants/isAble';

const JOI: Joi.Root = Joi.extend(Date) as typeof Joi;

class ValidationBodyPerson implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<IPerson> = JOI.object({
        nome: JOI.string().min(3).trim().required(),
        cpf: JOI.string().trim().min(11).max(11)
          .required(),
        data_nascimento: JOI.date().format('DD/MM/YYYY').max('now').required(),
        email: JOI.string().trim().email({
          minDomainSegments: 2,
          tlds: { allow: domain },
        }).required(),
        senha: JOI.string().min(6).trim().required(),
        habilitado: JOI.string().trim().valid(...Object.values(able)).required(),
      });

      const { error } = await validation.validate(req.body, {
        abortEarly: false,
        allowUnknown: false,
      });

      if (error) throw error;

      return next();
    } catch (error) {
      return res.status(400).json({
        details: error.details.map((detail) => ({
          name: detail.path[0],
          description: detail.message,
        })),
      });
    }
  }
}

export default ValidationBodyPerson;
