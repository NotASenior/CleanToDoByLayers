import {Usecase} from '../usecase';
import {GetNoteRequest} from './get-note-request';
import {GetNoteResponse} from './get-note-response';
import {Note} from '../../entity/note';
import {NoteRepository} from '../../repository/note-repository';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

export class GetNoteInteractor implements Usecase<GetNoteRequest, GetNoteResponse> {
  private noteRepository: NoteRepository = environment.noteRepository;

  execute(request: GetNoteRequest): GetNoteResponse {
    const id: number = request.getId();
    const noteObservable: Observable<Note> = this.noteRepository.getById(id);

    return new GetNoteResponse(noteObservable);
  }
}
