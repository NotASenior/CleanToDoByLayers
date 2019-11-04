import {NoteModel} from '../model/note-model';
import {Observable} from 'rxjs';

export interface NoteView {
  setNote(noteObservable: Observable<NoteModel>);
}
