export class NoteModel {
  public id: number;
  public title: string;
  public content: string;
  public createdAt: Date;
  public updatedAt: Date;

  public getId(): number {
    return this.id;
  }
  public getTitle(): string {
    return this.title;
  }
  public getContent(): string {
    return this.content;
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
  public setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }
  public setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }
}
