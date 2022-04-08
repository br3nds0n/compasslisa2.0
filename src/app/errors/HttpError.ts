class HttpError extends Error {
  readonly statusCode;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
  }
}

export default HttpError;
