import {Mapper} from './mapper';
import {Note} from '../../domain/entity/note';
import {NoteModel} from '../model/note-model';
import {Image} from '../../domain/entity/image';
import {ImageModel} from '../model/image-model';

export class NoteMapper implements Mapper<Note, NoteModel> {

  public constructor(private imageMapper: Mapper<Image, ImageModel>) { }

  mapEntityToModel(input: Note): NoteModel {
    return new NoteModel()
      .setId(input.getId())
      .setTitle(input.getTitle())
      .setImages(
        this.imageMapper.mapEntitiesToModels(input.getImages())
      )
      .setContent(input.getContent())
      .setCreatedAt(input.getCreatedAt())
      .setUpdatedAt(input.getUpdatedAt());
  }

  mapModelToEntity(input: NoteModel): Note {
    return new Note()
      .setId(input.getId())
      .setTitle(input.getTitle())
      .setImages(
        this.imageMapper.mapModelsToEntities(input.getImages())
      )
      .setContent(input.getContent())
      .setCreatedAt(input.getCreatedAt())
      .setUpdatedAt(input.getUpdatedAt());
  }

  mapEntitiesToModels(input: Array<Note>): Array<NoteModel> {
    return input.map(note => {
      return this.mapEntityToModel(note);
    });
  }

  mapModelsToEntities(input: Array<NoteModel>): Array<Note> {
    return input.map(note => {
      return this.mapModelToEntity(note);
    });
  }
}
