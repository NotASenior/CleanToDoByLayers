import {NoteModel} from '../../../presentation/model/note-model';

export class GetNotesRequest {
  private readonly filter: NoteModel;

  public constructor(filter: NoteModel) {
    this.filter = filter;
  }

  public getFilter(): NoteModel {
    return this.filter;
  }
}
