import HttpError from '../HttpError';

class NotFound extends HttpError {
  constructor(message) {
    super(404, message);

    this.statusCode = 404;
    this.name = 'Not Found';
  }
}

export default NotFound;
