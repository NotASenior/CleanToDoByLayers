import { Injectable } from '@angular/core';
import {NotesPresenter} from '../../presenter/notes-presenter';
import {Usecase} from '../../../domain/usecase/usecase';
import {GetNotesRequest} from '../../../domain/usecase/get-notes/get-notes-request';
import {GetNotesResponse} from '../../../domain/usecase/get-notes/get-notes-response';
import {NotesView} from '../../view/notes-view';
import {NoteModel} from '../../model/note-model';
import {InteractorDependencies} from '../../../dependency/interactor.factory';
import {DeleteNoteRequest} from '../../../domain/usecase/delete-note/delete-note-request';
import {DeleteNoteResponse} from '../../../domain/usecase/delete-note/delete-note-response';

@Injectable({
  providedIn: 'root'
})
export class NotesPresenterImpl implements NotesPresenter {
  private view: NotesView;
  private getNotesInteractor: Usecase<GetNotesRequest, GetNotesResponse> = InteractorDependencies.getNotesInteractor;
  private deleteNoteInteractor: Usecase<DeleteNoteRequest, DeleteNoteResponse> = InteractorDependencies.deleteNoteInteractor;

  constructor(view: NotesView) {
    this.view = view;
  }

  getNotes(filter: NoteModel) {
    const request = new GetNotesRequest(filter);
    const response: GetNotesResponse = this.getNotesInteractor.execute(request);

    this.view.setNotes(response.getNotes());
  }

  deleteNote(note: NoteModel) {
    const request = new DeleteNoteRequest(note.getId());
    const response: DeleteNoteResponse = this.deleteNoteInteractor.execute(request);

    this.view.onNoteDelete(response.getResponse());
  }
}
