import {Usecase} from '../usecase';
import {Note} from '../../entity/note';
import {environment} from '../../../../environments/environment';
import {NoteRepository} from '../../repository/note-repository';
import {Observable} from 'rxjs';
import {DeleteNoteRequest} from './delete-note-request';
import {DeleteNoteResponse} from './delete-note-response';

export class DeleteNoteInteractor implements Usecase<DeleteNoteRequest, DeleteNoteResponse> {
  private noteRepository: NoteRepository = environment.noteRepository;

  execute(request: DeleteNoteRequest): DeleteNoteResponse {
    const id: number = request.getId();
    const response: Observable<any> = this.noteRepository.delete(new Note().setId(id));

    return new DeleteNoteResponse(response);
  }
}
