import {Observable} from 'rxjs';
import {Note} from '../../entity/note';

export class GetNotesResponse {
  private readonly notes: Observable<Array<Note>>;

  public constructor(notes: Observable<Array<Note>>) {
    this.notes = notes;
  }

  public getNotes(): Observable<Array<Note>> {
    return this.notes;
  }
}
