interface IErrorProps {
  message: string;
  statusCode?: number;
  code:
    | "generic"
    | "not.found"
    | "duplicated"
    | "unauthorized"
    | "token.expired"
    | "token.missing"
    | "token.invalid"
    | "prisma.error"
    | "incorrect.credentials";
}

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly code: string;

  constructor({ message, statusCode = 400, code }: IErrorProps) {
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}

export { AppError };
