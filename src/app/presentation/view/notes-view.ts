import {NoteModel} from '../model/note-model';
import {Observable} from 'rxjs';

export interface NotesView {
  setNotes(notesObservable: Observable<NoteModel[]>);
}
