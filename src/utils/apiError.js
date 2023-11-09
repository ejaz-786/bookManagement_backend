class ErrorHandler extends Error {
  constructor(statusCode, message = "something went wrong") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    Error.captureStackTrace(this, this.constructor);
  }
}
