import {Entity} from './entity';

export class Note extends Entity {
  private title: string;
  private content: string;

  public getTitle(): string {
    return this.title;
  }
  public getContent(): string {
    return this.content;
  }

  public setTitle(title: string): Note {
    this.title = title;
    return this;
  }
  public setContent(content: string): Note {
    this.content = content;
    return this;
  }
}
