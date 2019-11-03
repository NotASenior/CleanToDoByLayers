import {NoteModel} from '../model/note-model';

export interface NoteView {
  setNote(note: NoteModel);
}
