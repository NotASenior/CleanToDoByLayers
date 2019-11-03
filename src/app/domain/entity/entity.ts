export class Entity {
  private id: number;
  private active: boolean;
  private createdAt: Date;
  private updatedAt: Date;

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
  }
  public setActive(active: boolean) {
    this.active = active;
  }
  public setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }
  public setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
}
