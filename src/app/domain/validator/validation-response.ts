export class ValidationResponse {
  private errors: string[];
  private isValidd: boolean;

  public constructor() { }

  public static FromSuccess(): ValidationResponse {
    const instance = new ValidationResponse();
    instance.isValidd = true;
    instance.errors = new Array<string>();

    return instance;
  }

  public static FromErrors(errors: string[]): ValidationResponse {
    const instance = new ValidationResponse();
    instance.isValidd = false;
    instance.errors = errors;

    return instance;
  }

  public isValid(): boolean {
    return this.isValidd;
  }

  public getErrors(): string[] {
    return this.errors;
  }
}
