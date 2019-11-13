import {Usecase} from '../usecase';
import {Note} from '../../entity/note';
import {environment} from '../../../../environments/environment';
import {NoteRepository} from '../../repository/note-repository';
import {Observable} from 'rxjs';
import {EditNoteRequest} from './edit-note-request';
import {EditNoteResponse} from './edit-note-response';

export class EditNoteInteractor implements Usecase<EditNoteRequest, EditNoteResponse> {
  private noteRepository: NoteRepository = environment.noteRepository;

  execute(request: EditNoteRequest): EditNoteResponse {
    const note: Note = request.getNote();
    const response: Observable<any> = this.noteRepository.update(note);

    return new EditNoteResponse(response);
  }
}
