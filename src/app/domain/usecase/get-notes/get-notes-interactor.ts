import {Usecase} from '../usecase';
import {GetNotesRequest} from './get-notes-request';
import {GetNotesResponse} from './get-notes-response';
import {NoteRepository} from '../../repository/note-repository';
import {Note} from '../../entity/note';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {NoteRepositoryFactory} from '../../../dependency/note-repository.factory';

export class GetNotesInteractor implements Usecase<GetNotesRequest, GetNotesResponse> {
  private noteRepository: NoteRepository = NoteRepositoryFactory.get(environment.repositoryType);

  execute(request: GetNotesRequest): GetNotesResponse {
    const filter: Note = request.getFilter();
    const notesObservable: Observable<Array<Note>> = this.noteRepository.getAll(filter);

    const notesModelObservable: Observable<Array<Note>> = notesObservable
      .pipe(
        map<Note[], Note[]>(notes => {
          return notes;
        }));

    return new GetNotesResponse(notesModelObservable);
  }
}
