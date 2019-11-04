import {Usecase} from '../usecase';
import {GetNoteRequest} from './get-note-request';
import {GetNoteResponse} from './get-note-response';
import {Mapper} from '../../mapper/mapper';
import {Note} from '../../entity/note';
import {NoteModel} from '../../../presentation/model/note-model';
import {Dependencies} from '../../../dependency/dependency.factory';
import {NoteRepository} from '../../repository/note-repository';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class GetNoteInteractor implements Usecase<GetNoteRequest, GetNoteResponse> {
  private noteMapper: Mapper<Note, NoteModel> = Dependencies.noteMapper;
  private noteRepository: NoteRepository = Dependencies.noteRepository;

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
