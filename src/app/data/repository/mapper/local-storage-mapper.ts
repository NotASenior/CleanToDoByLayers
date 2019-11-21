import {Note} from '../../../domain/entity/note';
import {RepositoryMapper} from './repository-mapper';
import {Image} from '../../../domain/entity/image';

export class LocalStorageMapper implements RepositoryMapper<any, Note> {
  map(input: any): Note {
    const mappedNote = new Note()
      .setId(input.id)
      .setTitle(input.title)
      .setActive(input.active)
      .setContent(input.content)
      .setCreatedAt(new Date(input.createdAt))
      .setUpdatedAt(new Date(input.updatedAt));

    const images: Image[] = new Array<Image>();
    for (const image of input.images) {
      const mappedImage: Image = new Image()
        .setId(image.id)
        .setTitle(image.title)
        .setActive(image.active)
        .setContent(image.content)
        .setCreatedAt(new Date(image.createdAt))
        .setUpdatedAt(new Date(image.updatedAt));

      images.push(mappedImage);
    }

    mappedNote.setImages(images);
    return mappedNote;
  }

  mapList(input: any[]): Note[] {
    return input.map<Note>(note => {
      return this.map(note);
    });
  }
}
