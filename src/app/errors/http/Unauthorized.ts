import HttpError from '../HttpError';

class Unauthorized extends HttpError {
  constructor(message) {
    super(401, message);

    this.statusCode = 401;
    this.name = 'Unauthorized';
  }
}

export default Unauthorized;
