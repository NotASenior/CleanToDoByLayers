import {Observable} from 'rxjs';

export class DeleteNoteResponse {

  private readonly response: Observable<any>;

  public constructor(response: Observable<any>) {
    this.response = response;
  }

  public getResponse(): Observable<any> {
    return this.response;
  }
}
