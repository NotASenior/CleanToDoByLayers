export interface Mapper<I, O> {
  mapFrom(input: I): O;
  mapTo(input: O): I;
  mapListFrom(input: Array<I>): Array<O>;
  mapListTo(input: Array<O>): Array<I>;
}
