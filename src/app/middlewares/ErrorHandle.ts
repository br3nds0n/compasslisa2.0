import HttpError from '../errors/HttpError';

export default function (error, req, res, next) {
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      message: error.name,
      ...error.body,
    });
    next();
  } else {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}
