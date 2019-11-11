import {Usecase} from '../usecase';
import {Mapper} from '../../mapper/mapper';
import {Note} from '../../entity/note';
import {NoteModel} from '../../../presentation/model/note-model';
import {environment} from '../../../../environments/environment';
import {NoteRepository} from '../../repository/note-repository';
import {Observable} from 'rxjs';
import {EditNoteRequest} from './edit-note-request';
import {EditNoteResponse} from './edit-note-response';

export class EditNoteInteractor implements Usecase<EditNoteRequest, EditNoteResponse> {
  private noteMapper: Mapper<Note, NoteModel> = environment.noteMapper;
  private noteRepository: NoteRepository = environment.noteRepository;

  execute(request: EditNoteRequest): EditNoteResponse {
    const note: Note = this.noteMapper.mapModelToEntity(request.getNote());
    const response: Observable<any> = this.noteRepository.update(note);

    return new EditNoteResponse(response);
  }
}
