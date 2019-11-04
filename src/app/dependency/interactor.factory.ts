import {GetNotesInteractor} from '../domain/usecase/get-notes/get-notes-interactor';

export const InteractorDependencies = {
  getNotesInteractor: new GetNotesInteractor(),
};
