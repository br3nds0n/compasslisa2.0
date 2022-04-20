import Joi, { ObjectSchema } from 'joi';
import Date from '@joi/date';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';

import { IPerson } from '../../interfaces/Person/IPerson';
import domain from '../../utils/constants/isDomain';
import able from '../../utils/constants/isAble';

const JOI: Joi.Root = Joi.extend(Date) as typeof Joi;

class ValidationQueryPerson implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<IPerson> = JOI.object({
        nome: JOI.string().min(3).trim(),
        cpf: JOI.string().trim().min(11).max(11),
        data_nascimento: JOI.date().format('DD/MM/YYYY').max('now'),
        email: JOI.string().trim().email({
          minDomainSegments: 2,
          tlds: { allow: domain },
        }),
        habilitado: JOI.string().trim().valid(able),
      });

      const { error } = await validation.validate(req.query, { abortEarly: false });

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

export default ValidationQueryPerson;
