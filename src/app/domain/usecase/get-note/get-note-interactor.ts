import {Usecase} from '../usecase';
import {GetNoteRequest} from './get-note-request';
import {GetNoteResponse} from './get-note-response';
import {Mapper} from '../../mapper/mapper';
import {Note} from '../../entity/note';
import {NoteModel} from '../../../presentation/model/note-model';
import {NoteRepository} from '../../repository/note-repository';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

export class GetNoteInteractor implements Usecase<GetNoteRequest, GetNoteResponse> {
  private noteMapper: Mapper<Note, NoteModel> = environment.noteMapper;
  private noteRepository: NoteRepository = environment.noteRepository;

  execute(request: GetNoteRequest): GetNoteResponse {
    const id: number = request.getId();
    const noteObservable: Observable<Note> = this.noteRepository.getById(id);

    const noteModelObservable: Observable<NoteModel> = noteObservable
      .pipe(
        map<Note, NoteModel>(note => {
          return this.noteMapper.mapEntityToModel(note);
        }));

    return new GetNoteResponse(noteModelObservable);
  }
}
