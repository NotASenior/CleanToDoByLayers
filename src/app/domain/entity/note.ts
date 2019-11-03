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

  public setTitle(title: string) {
    this.title = title;
  }
  public setContent(content: string) {
    this.content = content;
  }
}
