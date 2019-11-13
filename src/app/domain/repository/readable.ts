import {Observable} from 'rxjs';

export interface Readable<I> {
  get(filter: I): Observable<I>;
  getAll(filter: I): Observable<Array<I>>;
  getById(id: number): Observable<I>;
}
