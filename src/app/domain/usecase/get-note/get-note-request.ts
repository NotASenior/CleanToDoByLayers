export class GetNoteRequest {
  private readonly id: number;

  public constructor(id: number) {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }
}
