class HttpError extends Error {
  readonly statusCode;

  constructor(statusCode: string, message: string) {
    super(message);

    this.statusCode = statusCode;
  }
}

export default HttpError;
