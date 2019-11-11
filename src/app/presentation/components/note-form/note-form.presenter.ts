import { Injectable } from '@angular/core';
import {Usecase} from '../../../domain/usecase/usecase';
import {NoteModel} from '../../model/note-model';
import {InteractorDependencies} from '../../../dependency/interactor.factory';
import {NoteFormView} from '../../view/note-form-view';
import {NoteFormPresenter} from '../../presenter/note-form-presenter';
import {AddNoteRequest} from '../../../domain/usecase/add-note/add-note-request';
import {AddNoteResponse} from '../../../domain/usecase/add-note/add-note-response';
import {environment} from '../../../../environments/environment';
import {Validator} from '../../../domain/validator/validator';
import {Note} from '../../../domain/entity/note';
import {ValidationResponse} from '../../../domain/validator/validation-response';
import {Mapper} from '../../../domain/mapper/mapper';
import {of} from 'rxjs';
import {GetNoteRequest} from '../../../domain/usecase/get-note/get-note-request';
import {GetNoteResponse} from '../../../domain/usecase/get-note/get-note-response';
import {EditNoteRequest} from '../../../domain/usecase/edit-note/edit-note-request';
import {EditNoteResponse} from '../../../domain/usecase/edit-note/edit-note-response';

@Injectable({
  providedIn: 'root'
})
export class NoteFormPresenterImpl implements NoteFormPresenter {
  private view: NoteFormView;
  private noteMapper: Mapper<Note, NoteModel> = environment.noteMapper;
  private noteValidator: Validator<Note> = environment.noteValidator;
  private addNoteInteractor: Usecase<AddNoteRequest, AddNoteResponse> = InteractorDependencies.addNoteInteractor;
  private editNoteInteractor: Usecase<EditNoteRequest, EditNoteResponse> = InteractorDependencies.editNoteInteractor;
  private getNoteInteractor: Usecase<GetNoteRequest, GetNoteResponse> = InteractorDependencies.getNoteInteractor;

  constructor(view: NoteFormView) {
    this.view = view;
  }

  getNote(id: number) {
    const request = new GetNoteRequest(id);
    const response: GetNoteResponse = this.getNoteInteractor.execute(request);

    this.view.setNote(response.getNote());
  }

  save(note: NoteModel) {
    const mappedNote: Note = this.noteMapper.mapModelToEntity(note);
    const validationResponse: ValidationResponse = this.noteValidator.validate(mappedNote);
    if (!validationResponse.isValid()) {
      this.view.onSaveResponse(of({
        errors: validationResponse.getErrors()
      }));
      return;
    }

    let response;
    if (note.getId() === 0) {
      const request = new AddNoteRequest(note);
      response = this.addNoteInteractor.execute(request);
    } else {
      const request = new EditNoteRequest(note);
      response = this.editNoteInteractor.execute(request);
    }

    this.view.onSaveResponse(response.getResponse());
  }
}
