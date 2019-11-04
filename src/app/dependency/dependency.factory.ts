import {NoteMockRepository} from '../data/repository/mock/note-mock-repository.service';
import {NoteMapper} from '../presentation/mapper/note-mapper';

export const Dependencies = {
  noteMapper: new NoteMapper(),
  noteRepository: new NoteMockRepository(),
};
