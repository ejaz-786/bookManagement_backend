class ErrorHandler extends ErrorHandler {
  constructor(statusCode, message = "something went wrong") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    Error.captureStackTrace(this, this.constructor);
  }
}
