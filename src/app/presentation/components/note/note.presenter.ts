import {Usecase} from '../../../domain/usecase/usecase';
import {InteractorFactory} from '../../../dependency/interactor.factory';
import {NotePresenter} from '../../presenter/note-presenter';
import {NoteView} from '../../view/note-view';
import {GetNoteRequest} from '../../../domain/usecase/get-note/get-note-request';
import {GetNoteResponse} from '../../../domain/usecase/get-note/get-note-response';
import {Note} from '../../../domain/entity/note';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NoteModel} from '../../model/note-model';
import {Mapper} from '../../mapper/mapper';
import {MapperFactory} from '../../../dependency/mapper.factory';

export class NotePresenterImpl implements NotePresenter {
  private view: NoteView;
  private mapper: Mapper<Note, NoteModel> = MapperFactory.getNoteMapper();
  private getNoteInteractor: Usecase<GetNoteRequest, GetNoteResponse> = InteractorFactory.getGetNoteInteractor();

  constructor(view: NoteView) {
    this.view = view;
  }

  getNote(id: number) {
    const request = new GetNoteRequest(id);
    const response: GetNoteResponse = this.getNoteInteractor.execute(request);

    const noteObservable: Observable<NoteModel> = response.getNote()
      .pipe(
        map((note: Note) => {
          if (!note) {
            return null;
          }

          return this.mapper.mapEntityToModel(note);
        })
      );

    this.view.setNote(noteObservable);
  }
}
