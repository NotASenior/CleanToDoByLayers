import {Usecase} from '../usecase';
import {Note} from '../../entity/note';
import {environment} from '../../../../environments/environment';
import {NoteRepository} from '../../repository/note-repository';
import {Observable} from 'rxjs';
import {EditNoteRequest} from './edit-note-request';
import {EditNoteResponse} from './edit-note-response';
import {NoteRepositoryFactory} from '../../../dependency/note-repository.factory';

export class EditNoteInteractor implements Usecase<EditNoteRequest, EditNoteResponse> {
  private noteRepository: NoteRepository = NoteRepositoryFactory.get(environment.repositoryType);

  execute(request: EditNoteRequest): EditNoteResponse {
    const note: Note = request.getNote();
    const response: Observable<any> = this.noteRepository.update(note);

    return new EditNoteResponse(response);
  }
}
