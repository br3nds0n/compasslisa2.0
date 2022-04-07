import HttpError from '../HttpError';

class Unauthorized extends HttpError {
  constructor() {
    super();
  }
}

export default Unauthorized;
