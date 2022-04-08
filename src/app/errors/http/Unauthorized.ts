import HttpError from '../HttpError';

class Unauthorized extends HttpError {
  constructor(message) {
    super(401, message);
  }
}

export default Unauthorized;
