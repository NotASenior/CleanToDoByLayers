import {Observable} from 'rxjs';
import {NoteModel} from '../model/note-model';

export interface NoteFormView {
  setNote(noteObservable: Observable<NoteModel>);
  onSaveResponse(response: Observable<any>);
}
