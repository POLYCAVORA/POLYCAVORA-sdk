/**
 * Base error class for all PolyEmperion SDK errors.
 */
export class PolyEmperionError extends Error {
  code?: string;
  cause?: unknown;
  
  constructor(message: string, code?: string, cause?: unknown) {
    super(message);
    this.name = "PolyEmperionError";
    this.code = code;
    this.cause = cause;
  }
}

/**
 * Error thrown when an HTTP request fails.
 */
export class HttpError extends PolyEmperionError {
  status: number;
  
  constructor(status: number, message: string, cause?: unknown) {
    super(message, "HTTP_ERROR", cause);
    this.status = status;
  }
}
