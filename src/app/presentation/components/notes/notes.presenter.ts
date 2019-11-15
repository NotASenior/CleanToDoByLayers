import {NotesPresenter} from '../../presenter/notes-presenter';
import {Usecase} from '../../../domain/usecase/usecase';
import {GetNotesRequest} from '../../../domain/usecase/get-notes/get-notes-request';
import {GetNotesResponse} from '../../../domain/usecase/get-notes/get-notes-response';
import {NotesView} from '../../view/notes-view';
import {NoteModel} from '../../model/note-model';
import {InteractorDependencies} from '../../../dependency/interactor.factory';
import {DeleteNoteRequest} from '../../../domain/usecase/delete-note/delete-note-request';
import {DeleteNoteResponse} from '../../../domain/usecase/delete-note/delete-note-response';
import {environment} from '../../../../environments/environment';
import {Note} from '../../../domain/entity/note';
import {Mapper} from '../../mapper/mapper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class NotesPresenterImpl implements NotesPresenter {
  private view: NotesView;
  private mapper: Mapper<Note, NoteModel> = environment.noteMapper;
  private getNotesInteractor: Usecase<GetNotesRequest, GetNotesResponse> = InteractorDependencies.getGetNotesInteractor();
  private deleteNoteInteractor: Usecase<DeleteNoteRequest, DeleteNoteResponse> = InteractorDependencies.getDeleteNoteInteractor();

  constructor(view: NotesView) {
    this.view = view;
  }

  getNotes(filter: NoteModel) {
    const mappedFilter: Note = this.mapper.mapModelToEntity(filter);
    const request = new GetNotesRequest(mappedFilter);
    const response: GetNotesResponse = this.getNotesInteractor.execute(request);

    const notesObservable: Observable<NoteModel[]> = response.getNotes()
      .pipe(
        map<Note[], NoteModel[]>((notes: Note[]) => {
          return this.mapper.mapEntitiesToModels(notes);
        })
      );

    this.view.setNotes(notesObservable);
  }

  deleteNote(note: NoteModel) {
    const request = new DeleteNoteRequest(note.getId());
    const response: DeleteNoteResponse = this.deleteNoteInteractor.execute(request);

    this.view.onNoteDelete(response.getResponse());
  }
}
