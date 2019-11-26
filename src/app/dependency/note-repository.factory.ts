import {NoteRepository} from '../domain/repository/note-repository';
import {NoteMockRepository} from '../data/repository/mock/note-mock-repository.service';
import {LocalStorageRepository} from '../data/repository/local-storage/local-storage-repository.service';
import {RepositoryType} from '../data/repository/repository-type.enum';

export class NoteRepositoryFactory {
  private static noteRepository: NoteRepository;

  public static get(type: RepositoryType): NoteRepository {
    switch (type) {
      case RepositoryType.mock:
        return this.getMockRepository();
      case RepositoryType.localStorage:
        return this.getLocalStorageRepository();
    }
  }

  public static getMockRepository(): NoteRepository {
    if (!this.noteRepository) {
      this.noteRepository = new NoteMockRepository();
    }

    return this.noteRepository;
  }

  public static getLocalStorageRepository(): NoteRepository {
    if (!this.noteRepository) {
      this.noteRepository = new LocalStorageRepository();
    }

    return this.noteRepository;
  }
}
