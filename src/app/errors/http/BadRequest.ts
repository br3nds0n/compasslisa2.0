import HttpError from '../HttpError';

class BadRequest extends HttpError {
  constructor(message) {
    super(400, message);

    this.statusCode = 400;
    this.name = 'Bad Request';
  }
}

export default BadRequest;
