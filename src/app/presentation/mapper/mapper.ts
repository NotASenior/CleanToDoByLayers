export interface Mapper<I, O> {
  mapEntityToModel(input: I): O;
  mapModelToEntity(input: O): I;
  mapEntitiesToModels(input: Array<I>): Array<O>;
  mapModelsToEntities(input: Array<O>): Array<I>;
}
