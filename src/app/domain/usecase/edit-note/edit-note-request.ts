import {NoteModel} from '../../../presentation/model/note-model';

export class EditNoteRequest {
  private readonly note: NoteModel;

  public constructor(note: NoteModel) {
    this.note = note;
  }

  public getNote(): NoteModel {
    return this.note;
  }
}
