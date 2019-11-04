import {NoteModel} from '../../../presentation/model/note-model';
import {Observable} from 'rxjs';

export class GetNotesResponse {
  private readonly notes: Observable<Array<NoteModel>>;

  public constructor(notes: Observable<Array<NoteModel>>) {
    this.notes = notes;
  }

  public getNotes(): Observable<Array<NoteModel>> {
    return this.notes;
  }
}
