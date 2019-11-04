import {Injectable} from '@angular/core';
import {Usecase} from '../../../domain/usecase/usecase';
import {InteractorDependencies} from '../../../dependency/interactor.factory';
import {NotePresenter} from '../../presenter/note-presenter';
import {NoteView} from '../../view/note-view';
import {GetNoteRequest} from '../../../domain/usecase/get-note/get-note-request';
import {GetNoteResponse} from '../../../domain/usecase/get-note/get-note-response';

@Injectable({
  providedIn: 'root'
})
export class NotePresenterImpl implements NotePresenter {
  private view: NoteView;
  private getNoteInteractor: Usecase<GetNoteRequest, GetNoteResponse> = InteractorDependencies.getNoteInteractor;

  constructor(view: NoteView) {
    this.view = view;
  }

  getNote(id: number) {
    const request = new GetNoteRequest(id);
    const response: GetNoteResponse = this.getNoteInteractor.execute(request);

    this.view.setNote(response.getNote());
  }
}
