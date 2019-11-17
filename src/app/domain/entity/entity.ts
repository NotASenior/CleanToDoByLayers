export class Entity {
  private id: number;
  private active: boolean;
  private createdAt: Date;
  private updatedAt: Date;

  public constructor() {
    this.setId(0);
    this.setActive(true);
    this.setCreatedAt(new Date());
    this.setUpdatedAt(new Date());
  }

  public getId(): number {
    return this.id;
  }
  public isActive(): boolean {
    return this.active;
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
  public setActive(active: boolean) {
    this.active = active;
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
