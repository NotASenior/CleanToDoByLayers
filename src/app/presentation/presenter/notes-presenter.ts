import {NoteModel} from '../model/note-model';

export interface NotesPresenter {
  getNotes(notes: Array<NoteModel>);
}
