import Joi, { ObjectSchema } from 'joi';
import Date from '@joi/date';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { ICar } from '../../interfaces/Car/ICar';

const JOI: Joi.Root = Joi.extend(Date) as typeof Joi;

class ValidationBodyCar implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<ICar> = JOI.object({
        modelo: JOI.string().min(3).max(20).trim()
          .required(),
        cor: JOI.string().min(3).max(20).trim()
          .required(),
        ano: JOI.date().format('YYYY').min('1950-01-01').max('2022-12-31')
          .required(),
        acessorios: JOI.array()
          .min(1)
          .items(JOI.object({ descricao: JOI.string().trim().required() }))
          .required()
          .unique('descricao'),
        quantidadePassageiros: JOI.number().integer().min(1).max(5)
          .required(),
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

export default ValidationBodyCar;
