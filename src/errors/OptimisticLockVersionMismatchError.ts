import { CustomError } from "./CustomError";

export class OptimisticLockVersionMismatchError extends Error {
  statusCode = 409;

  constructor(entity: string, expectedVersion: number, actualVersion: number) {
    super();
    Object.setPrototypeOf(this, OptimisticLockVersionMismatchError.prototype);
    this.message = `The optimistic lock on entity ${entity} failed, version ${expectedVersion} was expected, but is actually ${actualVersion}.`;
  }
  serializeError() {
    return [{ message: this.message }];
  }
}
