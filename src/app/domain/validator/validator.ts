import {ValidationResponse} from './validation-response';

export interface Validator<T> {
  validate(entity: T): ValidationResponse;
}
