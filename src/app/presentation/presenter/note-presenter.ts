import {NoteModel} from '../model/note-model';

export interface NotePresenter {
  getNote(note: NoteModel);
}
