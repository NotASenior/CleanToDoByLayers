import {Usecase} from '../usecase';
import {GetNotesRequest} from './get-notes-request';
import {GetNotesResponse} from './get-notes-response';
import {NoteRepository} from '../../repository/note-repository';
import {Mapper} from '../../mapper/mapper';
import {Note} from '../../entity/note';
import {NoteModel} from '../../../presentation/model/note-model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Dependencies} from '../../../dependency/dependency.factory';

export class GetNotesInteractor implements Usecase<GetNotesRequest, GetNotesResponse> {
  private noteMapper: Mapper<Note, NoteModel> = Dependencies.noteMapper;
  private noteRepository: NoteRepository = Dependencies.noteRepository;

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
