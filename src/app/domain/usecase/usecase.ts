export interface Usecase<S, T> {
  execute(request: S): T;
}
