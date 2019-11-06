import {Observable} from 'rxjs';

export interface NoteFormView {
  onSaveResponse(response: Observable<any>);
}
