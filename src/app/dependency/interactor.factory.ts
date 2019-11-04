import {GetNoteInteractor} from '../domain/usecase/get-note/get-note-interactor';
import {GetNotesInteractor} from '../domain/usecase/get-notes/get-notes-interactor';

export const InteractorDependencies = {
  getNoteInteractor: new GetNoteInteractor(),
  getNotesInteractor: new GetNotesInteractor(),
};
