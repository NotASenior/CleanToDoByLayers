import {Note} from '../../entity/note';

export class EditNoteRequest {
  private readonly note: Note;

  public constructor(note: Note) {
    this.note = note;
  }

  public getNote(): Note {
    return this.note;
  }
}
