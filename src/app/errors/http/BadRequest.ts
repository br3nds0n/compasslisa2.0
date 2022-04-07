import HttpError from '../HttpError';

class BadRequest extends HttpError {
  constructor() {
    super();
  }
}

export default BadRequest;
