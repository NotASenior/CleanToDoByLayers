import {NoteModel} from '../model/note-model';

export interface NotesView {
  setNotes(notes: Array<NoteModel>);
}
