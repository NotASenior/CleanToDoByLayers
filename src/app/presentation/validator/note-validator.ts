import {Note} from '../../domain/entity/note';
import {Validator} from '../../domain/validator/validator';
import {ValidationResponse} from '../../domain/validator/validation-response';

export class NoteValidator implements Validator<Note> {
  validate(entity: Note): ValidationResponse {
    const errors = new Array<string>();

    if (entity.getContent() == null || entity.getContent().length === 0) {
      errors.push('La nota no tiene un contenido válido');
    }

    if (errors.length === 0) {
      return ValidationResponse.FromSuccess();
    } else {
      return ValidationResponse.FromErrors(errors);
    }
  }
}
