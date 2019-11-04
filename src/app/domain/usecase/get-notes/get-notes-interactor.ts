import {Usecase} from '../usecase';
import {GetNotesRequest} from './get-notes-request';
import {GetNotesResponse} from './get-notes-response';
import {NoteRepository} from '../../repository/note-repository';
import {Mapper} from '../../mapper/mapper';
import {Note} from '../../entity/note';
import {NoteModel} from '../../../presentation/model/note-model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

export class GetNotesInteractor implements Usecase<GetNotesRequest, GetNotesResponse> {
  private noteMapper: Mapper<Note, NoteModel> = environment.noteMapper;
  private noteRepository: NoteRepository = environment.noteRepository;

  execute(request: GetNotesRequest): GetNotesResponse {
    const filter: Note = this.noteMapper.mapModelToEntity(request.getFilter());
    const notesObservable: Observable<Array<Note>> = this.noteRepository.getAll(filter);

    const notesModelObservable: Observable<Array<NoteModel>> = notesObservable
      .pipe(
        map<Note[], NoteModel[]>(notes => {
          return this.noteMapper.mapEntitiesToModels(notes);
        }));

    return new GetNotesResponse(notesModelObservable);
  }
}
