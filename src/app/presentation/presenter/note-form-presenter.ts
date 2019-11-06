import {Observable} from 'rxjs';
import {NoteModel} from '../model/note-model';

export interface NoteFormPresenter {
  save(note: NoteModel);
}
