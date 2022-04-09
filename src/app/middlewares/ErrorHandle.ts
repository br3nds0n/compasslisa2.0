import HttpError from '../errors/HttpError';

export default (error, req, res, next) => {
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      details: {
        name: error.name,
        description: error.message,
      },
    });
    next();
  } else {
    res.status(500).json({
      details: {
        name: 'internal server Error',
        description: error.message,
      },
    });
  }
};
