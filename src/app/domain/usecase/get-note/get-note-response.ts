import {Observable} from 'rxjs';
import {Note} from '../../entity/note';

export class GetNoteResponse {
  private readonly note: Observable<Note>;

  public constructor(note: Observable<Note>) {
    this.note = note;
  }

  public getNote(): Observable<Note> {
    return this.note;
  }
}
