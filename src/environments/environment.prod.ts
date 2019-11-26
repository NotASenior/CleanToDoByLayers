import {NoteValidator} from '../app/presentation/validator/note-validator';
import {RepositoryType} from '../app/data/repository/repository-type.enum';

export const environment = {
  production: true,
  name: 'Prod',
  noteValidator: new NoteValidator(),
  repositoryType: RepositoryType.localStorage
};
