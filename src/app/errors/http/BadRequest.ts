import HttpError from '../HttpError';

class BadRequest extends HttpError {
  constructor(message) {
    super(400, message);
  }
}

export default BadRequest;
