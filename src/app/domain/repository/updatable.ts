import {Observable} from 'rxjs';

export interface Updatable<I> {
  update(toUpdate: I): Observable<any>;
}
