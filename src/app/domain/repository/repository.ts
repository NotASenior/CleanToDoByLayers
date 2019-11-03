import {Observable} from 'rxjs';

export interface Repository<I> {
  create(toCreate: I);
  get(filter: I): Observable<I>;
  getAll(filter: I): Observable<Array<I>>;
  getById(id: number): Observable<I>;
  update(toUpdate: I);
  delete(toDelete: I);
}
