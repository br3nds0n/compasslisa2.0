import HttpError from '../HttpError';

class NotFound extends HttpError {
  constructor(message) {
    super(404, message);
  }
}

export default NotFound;
