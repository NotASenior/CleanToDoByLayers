import {Entity} from './entity';

export class Image extends Entity {
  private title: string;
  private content: string;

  public getTitle(): string {
    return this.title;
  }
  public getContent(): string {
    return this.content;
  }

  public setTitle(title: string): Image {
    this.title = title;
    return this;
  }
  public setContent(content: string): Image {
    this.content = content;
    return this;
  }
}
