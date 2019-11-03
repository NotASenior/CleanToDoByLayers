import {Mapper} from '../../domain/mapper/mapper';
import {Note} from '../../domain/entity/note';
import {NoteModel} from '../model/note-model';

export class NoteMapper implements Mapper<Note, NoteModel> {
  mapFrom(input: Note): NoteModel {
    return new NoteModel()
      .setId(input.getId())
      .setTitle(input.getTitle())
      .setContent(input.getContent())
      .setCreatedAt(input.getCreatedAt())
      .setUpdatedAt(input.getUpdatedAt());
  }

  mapTo(input: NoteModel): Note {
    return new Note()
      .setId(input.getId())
      .setTitle(input.getTitle())
      .setContent(input.getContent())
      .setCreatedAt(input.getCreatedAt())
      .setUpdatedAt(input.getUpdatedAt());
  }

  mapListFrom(input: Array<Note>): Array<NoteModel> {
    return input.map(note => {
      return this.mapFrom(note);
    });
  }

  mapListTo(input: Array<NoteModel>): Array<Note> {
    return input.map(note => {
      return this.mapTo(note);
    });
  }
}
