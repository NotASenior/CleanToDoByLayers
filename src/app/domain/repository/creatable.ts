import {Observable} from 'rxjs';

export interface Creatable<I> {
  create(toCreate: I): Observable<any>;
}
