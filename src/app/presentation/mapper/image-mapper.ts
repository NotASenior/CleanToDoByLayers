import {Mapper} from './mapper';
import {Image} from '../../domain/entity/image';
import {ImageModel} from '../model/image-model';

export class ImageMapper implements Mapper<Image, ImageModel> {
  mapEntityToModel(input: Image): ImageModel {
    return new ImageModel()
      .setId(input.getId())
      .setTitle(input.getTitle())
      .setContent(input.getContent())
      .setCreatedAt(input.getCreatedAt())
      .setUpdatedAt(input.getUpdatedAt());
  }

  mapModelToEntity(input: ImageModel): Image {
    return new Image()
      .setId(input.getId())
      .setTitle(input.getTitle())
      .setContent(input.getContent())
      .setCreatedAt(input.getCreatedAt())
      .setUpdatedAt(input.getUpdatedAt());
  }

  mapEntitiesToModels(input: Array<Image>): Array<ImageModel> {
    return input.map(note => {
      return this.mapEntityToModel(note);
    });
  }

  mapModelsToEntities(input: Array<ImageModel>): Array<Image> {
    return input.map(note => {
      return this.mapModelToEntity(note);
    });
  }
}
