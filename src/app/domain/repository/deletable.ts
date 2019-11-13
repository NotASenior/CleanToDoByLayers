import {Observable} from 'rxjs';

export interface Deletable<I> {
  delete(toDelete: I): Observable<boolean>;
}
