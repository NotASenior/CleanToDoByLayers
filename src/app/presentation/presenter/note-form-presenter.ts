import {NoteModel} from '../model/note-model';

export interface NoteFormPresenter {
  getNote(id: number);
  save(note: NoteModel);
}
