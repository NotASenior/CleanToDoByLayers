import {Observable} from 'rxjs';

export interface Repository<I> {
  create(toCreate: I): Observable<any>;
  get(filter: I): Observable<I>;
  getAll(filter: I): Observable<Array<I>>;
  getById(id: number): Observable<I>;
  update(toUpdate: I): Observable<any>;
  delete(toDelete: I): Observable<boolean>;
}
