import {Entity} from './entity';
import {Image} from './image';

export class Note extends Entity {
  private title: string;
  private content: string;
  private images: Image[];

  public constructor() {
    super();
    this.setTitle('');
    this.setContent('');
    this.setImages(new Array<Image>());
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

  public setTitle(title: string): Note {
    this.title = title;
    return this;
  }
  public setContent(content: string): Note {
    this.content = content;
    return this;
  }
  public setImages(images: Image[]) {
    this.images = images;
    return this;
  }

  public addImage(image: Image) {
    this.images.push(image);
  }

  public getImage(id: number) {
    for (const image of this.images) {
      if (image.getId() === id) {
        return image;
      }
    }

    return null;
  }

  public removeImage(imageToRemove: Image) {
    this.images = this.images.filter(image => {
      return image.getId() !== imageToRemove.getId();
    });
  }
}
