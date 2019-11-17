export class ImageModel {
  public id: number;
  public title: string;
  public content: string;
  public createdAt: Date;
  public updatedAt: Date;

  public constructor() {
    this.setId(0);
    this.setTitle('');
    this.setContent('');
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
  public setTitle(title: string): ImageModel {
    this.title = title;
    return this;
  }
  public setContent(content: string): ImageModel {
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
