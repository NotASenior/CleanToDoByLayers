import {Usecase} from '../usecase';
import {Mapper} from '../../mapper/mapper';
import {Note} from '../../entity/note';
import {NoteModel} from '../../../presentation/model/note-model';
import {NoteRepository} from '../../repository/note-repository';
import {AddNoteRequest} from './add-note-request';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {AddNoteResponse} from './add-note-response';

export class AddNoteInteractor implements Usecase<AddNoteRequest, AddNoteResponse> {
  private noteMapper: Mapper<Note, NoteModel> = environment.noteMapper;
  private noteRepository: NoteRepository = environment.noteRepository;

  execute(request: AddNoteRequest): AddNoteResponse {
    const note: Note = this.noteMapper.mapModelToEntity(request.getNote());
    const response: Observable<any> = this.noteRepository.create(note);

    return new AddNoteResponse(response);
  }
}
