import {Usecase} from '../usecase';
import {Note} from '../../entity/note';
import {NoteRepository} from '../../repository/note-repository';
import {AddNoteRequest} from './add-note-request';
import {Observable} from 'rxjs';
import {AddNoteResponse} from './add-note-response';
import {NoteRepositoryFactory} from '../../../dependency/note-repository.factory';
import {environment} from '../../../../environments/environment';

export class AddNoteInteractor implements Usecase<AddNoteRequest, AddNoteResponse> {
  private noteRepository: NoteRepository = NoteRepositoryFactory.get(environment.repositoryType);

  execute(request: AddNoteRequest): AddNoteResponse {
    const note: Note = request.getNote();
    const response: Observable<any> = this.noteRepository.create(note);

    return new AddNoteResponse(response);
  }
}
