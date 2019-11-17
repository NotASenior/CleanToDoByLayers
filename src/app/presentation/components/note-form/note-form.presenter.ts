import {Usecase} from '../../../domain/usecase/usecase';
import {NoteModel} from '../../model/note-model';
import {InteractorFactory} from '../../../dependency/interactor.factory';
import {NoteFormView} from '../../view/note-form-view';
import {NoteFormPresenter} from '../../presenter/note-form-presenter';
import {AddNoteRequest} from '../../../domain/usecase/add-note/add-note-request';
import {AddNoteResponse} from '../../../domain/usecase/add-note/add-note-response';
import {environment} from '../../../../environments/environment';
import {Validator} from '../../../domain/validator/validator';
import {Note} from '../../../domain/entity/note';
import {ValidationResponse} from '../../../domain/validator/validation-response';
import {Mapper} from '../../mapper/mapper';
import {Observable, of} from 'rxjs';
import {GetNoteRequest} from '../../../domain/usecase/get-note/get-note-request';
import {GetNoteResponse} from '../../../domain/usecase/get-note/get-note-response';
import {EditNoteRequest} from '../../../domain/usecase/edit-note/edit-note-request';
import {EditNoteResponse} from '../../../domain/usecase/edit-note/edit-note-response';
import {map} from 'rxjs/operators';
import {MapperFactory} from '../../../dependency/mapper.factory';

export class NoteFormPresenterImpl implements NoteFormPresenter {
  private view: NoteFormView;
  private mapper: Mapper<Note, NoteModel> = MapperFactory.getNoteMapper();
  private noteValidator: Validator<Note> = environment.noteValidator;
  private addNoteInteractor: Usecase<AddNoteRequest, AddNoteResponse> = InteractorFactory.getAddNoteInteractor();
  private editNoteInteractor: Usecase<EditNoteRequest, EditNoteResponse> = InteractorFactory.getEditNoteInteractor();
  private getNoteInteractor: Usecase<GetNoteRequest, GetNoteResponse> = InteractorFactory.getGetNoteInteractor();

  constructor(view: NoteFormView) {
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

  save(note: NoteModel) {
    const mappedNote: Note = this.mapper.mapModelToEntity(note);
    const validationResponse: ValidationResponse = this.noteValidator.validate(mappedNote);
    if (!validationResponse.isValid()) {
      this.view.onSaveResponse(of({
        errors: validationResponse.getErrors()
      }));
      return;
    }

    let response;
    if (note.getId() === 0) {
      const request = new AddNoteRequest(mappedNote);
      response = this.addNoteInteractor.execute(request);
    } else {
      const request = new EditNoteRequest(mappedNote);
      response = this.editNoteInteractor.execute(request);
    }

    this.view.onSaveResponse(response.getResponse());
  }
}
