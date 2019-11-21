import {NoteValidator} from '../app/presentation/validator/note-validator';
import {LocalStorageRepository} from '../app/data/repository/local-storage/local-storage-repository.service';

export const environment = {
  production: true,
  name: 'Prod',
  noteValidator: new NoteValidator(),
  noteRepository: new LocalStorageRepository(),
};
