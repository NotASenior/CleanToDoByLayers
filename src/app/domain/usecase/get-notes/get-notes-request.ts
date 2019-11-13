import {Note} from '../../entity/note';

export class GetNotesRequest {
  private readonly filter: Note;

  public constructor(filter: Note) {
    this.filter = filter;
  }

  public getFilter(): Note {
    return this.filter;
  }
}
