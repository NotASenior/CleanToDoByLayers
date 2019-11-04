import {GetNoteInteractor} from '../domain/usecase/get-note/get-note-interactor';
import {GetNotesInteractor} from '../domain/usecase/get-notes/get-notes-interactor';
import {AddNoteInteractor} from '../domain/usecase/add-note/add-note-interactor';
import {DeleteNoteInteractor} from '../domain/usecase/delete-note/delete-note-interactor';

export const InteractorDependencies = {
  addNoteInteractor: new AddNoteInteractor(),
  getNoteInteractor: new GetNoteInteractor(),
  getNotesInteractor: new GetNotesInteractor(),
  deleteNoteInteractor: new DeleteNoteInteractor(),
};
