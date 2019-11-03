import {Injectable} from '@angular/core';
import {NoteRepository} from '../../../domain/repository/note-repository';
import {Note} from '../../../domain/entity/note';

@Injectable({
  providedIn: 'root'
})
export class NoteMockRepository implements NoteRepository {
  notes: Array<Note> = new Array<Note>();

  constructor() {
    this.init();
  }

  private init() {
    this.notes.push(new Note()
      .setId(1)
      .setTitle('Nota 1')
      .setContent('Contenido de la nota 1')
      .setActive(true)
      .setCreatedAt(new Date(2019, 1, 1))
      .setUpdatedAt(new Date(2019, 2, 1))
    );
    this.notes.push(new Note()
      .setId(2)
      .setTitle('Nota 2')
      .setContent('Contenido de la nota 2')
      .setActive(true)
      .setCreatedAt(new Date(2019, 1, 2))
      .setUpdatedAt(new Date(2019, 2, 2))
    );
    this.notes.push(new Note()
      .setId(3)
      .setTitle('Nota 3')
      .setContent('Contenido de la nota 3')
      .setActive(true)
      .setCreatedAt(new Date(2019, 1, 3))
      .setUpdatedAt(new Date(2019, 2, 3))
    );
  }

  create(toCreate: Note) {
    toCreate.setActive(true);
    toCreate.setCreatedAt(new Date());
    toCreate.setUpdatedAt(null);

    this.notes.push(toCreate);
  }

  delete(toDelete: Note) {
    let i = 0;

    for (const note of this.notes) {
      if (note.getId() === toDelete.getId()) {
        this.notes.slice(i);
        break;
      }

      i++;
    }
  }

  get(filter: Note): Note {
    const filteredNotes: Array<Note> = this.getAll(filter);
    return filteredNotes.pop();
  }

  getAll(filter: Note): Array<Note> {
    return this.notes.filter(note => {
      if (filter.getId() > 0 && note.getId() === filter.getId()) {
        return true;
      }
      if (filter.getTitle() != null && filter.getTitle().length > 0 && note.getTitle().includes(filter.getTitle())) {
        return true;
      }
      if (filter.getContent() != null && filter.getContent().length > 0 && note.getContent().includes(filter.getContent())) {
        return true;
      }
    });
  }

  getById(id: number): Note {
    return this.get(new Note().setId(id));
  }

  update(toUpdate: Note) {
    toUpdate.setUpdatedAt(new Date());

    const currentNote: Note = this.getById(toUpdate.getId());
    currentNote.setTitle(
      toUpdate.getTitle() != null && toUpdate.getTitle().length > 0
      ? toUpdate.getTitle()
      : currentNote.getTitle());
    currentNote.setContent(
      toUpdate.getContent() != null && toUpdate.getContent().length > 0
        ? toUpdate.getContent()
        : currentNote.getContent());

    let i = 0;
    for (const note of this.notes) {
      if (note.getId() === currentNote.getId()) {
        this.notes[i] = currentNote;
        break;
      }

      i++;
    }
  }
}
