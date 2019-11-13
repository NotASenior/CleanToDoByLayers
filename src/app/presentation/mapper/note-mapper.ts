import {Mapper} from './mapper';
import {Note} from '../../domain/entity/note';
import {NoteModel} from '../model/note-model';

export class NoteMapper implements Mapper<Note, NoteModel> {
  mapEntityToModel(input: Note): NoteModel {
    return new NoteModel()
      .setId(input.getId())
      .setTitle(input.getTitle())
      .setContent(input.getContent())
      .setCreatedAt(input.getCreatedAt())
      .setUpdatedAt(input.getUpdatedAt());
  }

  mapModelToEntity(input: NoteModel): Note {
    return new Note()
      .setId(input.getId())
      .setTitle(input.getTitle())
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
