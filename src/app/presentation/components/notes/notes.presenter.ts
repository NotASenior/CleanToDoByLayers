import { Injectable } from '@angular/core';
import {NotesPresenter} from '../../presenter/notes-presenter';
import {Usecase} from '../../../domain/usecase/usecase';
import {GetNotesRequest} from '../../../domain/usecase/get-notes/get-notes-request';
import {GetNotesResponse} from '../../../domain/usecase/get-notes/get-notes-response';
import {NotesView} from '../../view/notes-view';
import {NoteModel} from '../../model/note-model';
import {InteractorDependencies} from '../../../dependency/interactor.factory';

@Injectable({
  providedIn: 'root'
})
export class NotesPresenterImpl implements NotesPresenter {
  private view: NotesView;
  private getNotesInteractor: Usecase<GetNotesRequest, GetNotesResponse> = InteractorDependencies.getNotesInteractor;

  constructor(view: NotesView) {
    this.view = view;
  }

  getNotes(filter: NoteModel) {
    const request = new GetNotesRequest(filter);
    const response: GetNotesResponse = this.getNotesInteractor.execute(request);

    this.view.setNotes(response.getNotes());
  }
}
