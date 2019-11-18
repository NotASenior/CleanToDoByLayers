import {ImageModel} from './image-model';

export class NoteModel {
  public id: number;
  public title: string;
  public content: string;
  public createdAt: Date;
  public updatedAt: Date;
  public images: ImageModel[];

  public constructor() {
    this.setId(0);
    this.setTitle('');
    this.setContent('');
    this.setImages(new Array<ImageModel>());
    this.setCreatedAt(new Date());
    this.setUpdatedAt(new Date());
  }

  public getId(): number {
    return this.id;
  }
  public getTitle(): string {
    return this.title;
  }
  public getContent(): string {
    return this.content;
  }
  public getImages() {
    return this.images;
  }
  public getCreatedAt(): Date {
    return this.createdAt;
  }
  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setId(id: number) {
    this.id = id;
    return this;
  }
  public setTitle(title: string): NoteModel {
    this.title = title;
    return this;
  }
  public setContent(content: string): NoteModel {
    this.content = content;
    return this;
  }
  public setImages(images: ImageModel[]) {
    this.images = images;
    return this;
  }
  public setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }
  public setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }

  public addImage(imageToAdd: ImageModel) {
    imageToAdd.setCreatedAt(new Date());
    imageToAdd.setUpdatedAt(new Date());

    let maxId = this.images.length + 1;
    this.images.forEach(image => {
      if (image.getId() > maxId) {
        maxId = image.getId();
      }
    });

    imageToAdd.setId(maxId + 1);

    this.images.push(imageToAdd);
  }

  public getImage(id: number) {
    for (const image of this.images) {
      if (image.getId() === id) {
        return image;
      }
    }

    return null;
  }

  public removeImage(imageToRemove: ImageModel) {
    this.images = this.images.filter(image => {
      return image.getId() !== imageToRemove.getId();
    });
  }
}
