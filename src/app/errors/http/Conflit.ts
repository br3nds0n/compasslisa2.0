import HttpError from '../HttpError';

class Conflit extends HttpError {
  constructor(message) {
    super(409, message);

    this.statusCode = 409;
    this.name = 'Conflit';
  }
}

export default Conflit;
