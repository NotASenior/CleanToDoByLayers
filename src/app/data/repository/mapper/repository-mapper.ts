import {Note} from '../../../domain/entity/note';

export interface RepositoryMapper<Input, Output> {
  map(input: any): Note;
  mapList(input: any[]): Note[];
}
