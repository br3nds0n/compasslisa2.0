import HttpError from '../errors/HttpError';

export default function (error, req, res, next) {
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      name: error.name,
      description: error.message,
    });
    next();
  } else {
    res.status(500).json({
      name: 'internal server Error',
      description: error.message,
    });
  }
}
