/**
 * Base error class for all POLYCAVORA SDK errors.
 */
export class POLYCAVORAError extends Error {
  code?: string;
  cause?: unknown;
  
  constructor(message: string, code?: string, cause?: unknown) {
    super(message);
    this.name = "POLYCAVORAError";
    this.code = code;
    this.cause = cause;
  }
}

/**
 * Error thrown when an HTTP request fails.
 */
export class HttpError extends POLYCAVORAError {
  status: number;
  
  constructor(status: number, message: string, cause?: unknown) {
    super(message, "HTTP_ERROR", cause);
    this.status = status;
  }
}
