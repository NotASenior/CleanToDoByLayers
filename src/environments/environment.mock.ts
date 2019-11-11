import {NoteMapper} from '../app/presentation/mapper/note-mapper';
import {NoteValidator} from '../app/presentation/validator/note-validator';
import {NoteMockRepository} from '../app/data/repository/mock/note-mock-repository.service';

export const environment = {
  production: false,
  name: 'Mock',
  noteMapper: new NoteMapper(),
  noteValidator: new NoteValidator(),
  noteRepository: new NoteMockRepository(),
};
