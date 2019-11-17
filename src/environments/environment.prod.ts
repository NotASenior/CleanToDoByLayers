import {NoteValidator} from '../app/presentation/validator/note-validator';
import {NoteMockRepository} from '../app/data/repository/mock/note-mock-repository.service';

export const environment = {
  production: true,
  name: 'Prod',
  noteValidator: new NoteValidator(),
  noteRepository: new NoteMockRepository(),
};
