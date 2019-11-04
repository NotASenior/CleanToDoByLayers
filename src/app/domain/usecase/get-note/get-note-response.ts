import {NoteModel} from '../../../presentation/model/note-model';
import {Observable} from 'rxjs';

export class GetNoteResponse {
  private readonly note: Observable<NoteModel>;

  public constructor(note: Observable<NoteModel>) {
    this.note = note;
  }

  public getNote(): Observable<NoteModel> {
    return this.note;
  }
}
