import {Note} from '../domain/entity/note';
import {NoteModel} from '../presentation/model/note-model';
import {Image} from '../domain/entity/image';
import {ImageModel} from '../presentation/model/image-model';
import {Mapper} from '../presentation/mapper/mapper';
import {NoteMapper} from '../presentation/mapper/note-mapper';
import {ImageMapper} from '../presentation/mapper/image-mapper';
import {RepositoryMapper} from '../data/repository/mapper/repository-mapper';
import {LocalStorageMapper} from '../data/repository/mapper/local-storage-mapper';

export class MapperFactory {
  private static noteMapper: Mapper<Note, NoteModel>;
  private static imageMapper: Mapper<Image, ImageModel>;
  private static localStorageMapper: RepositoryMapper<any, Note>;

  public static getNoteMapper(): Mapper<Note, NoteModel> {
    if (!this.noteMapper) {
      this.noteMapper = new NoteMapper(
        this.getImageMapper()
      );
    }

    return this.noteMapper;
  }

  public static getImageMapper(): Mapper<Image, ImageModel> {
    if (!this.imageMapper) {
      this.imageMapper = new ImageMapper();
    }

    return this.imageMapper;
  }

  public static getLocalStorageMapper(): RepositoryMapper<any, Note> {
    if (!this.localStorageMapper) {
      this.localStorageMapper = new LocalStorageMapper();
    }

    return this.localStorageMapper;
  }
}
