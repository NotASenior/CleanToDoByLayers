export interface Repository<I> {
  create(toCreate: I);
  get(filter: I): I;
  getAll(filter: I): Array<I>;
  getById(id: number): I;
  update(toUpdate: I);
  delete(toDelete: I);
}
