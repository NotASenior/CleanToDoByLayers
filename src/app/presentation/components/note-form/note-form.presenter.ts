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

@Injectable({
  providedIn: 'root'
})
export class NoteFormPresenterImpl implements NoteFormPresenter {
  private view: NoteFormView;
  private noteMapper: Mapper<Note, NoteModel> = environment.noteMapper;
  private noteValidator: Validator<Note> = environment.noteValidator;
  private addNoteInteractor: Usecase<AddNoteRequest, AddNoteResponse> = InteractorDependencies.addNoteInteractor;

  constructor(view: NoteFormView) {
    this.view = view;
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

    const request = new AddNoteRequest(note);
    const response: AddNoteResponse = this.addNoteInteractor.execute(request);

    this.view.onSaveResponse(response.getResponse());
  }
}
