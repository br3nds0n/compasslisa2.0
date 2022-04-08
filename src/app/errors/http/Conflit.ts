import HttpError from '../HttpError';

class Conflit extends HttpError {
  constructor(message) {
    super(409, message);
  }
}

export default Conflit;
