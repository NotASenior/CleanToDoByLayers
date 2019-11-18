import {Injectable} from '@angular/core';
import {NoteRepository} from '../../../domain/repository/note-repository';
import {Note} from '../../../domain/entity/note';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  create(toCreate: Note): Observable<any> {
    toCreate.setActive(true);
    toCreate.setCreatedAt(new Date());
    toCreate.setUpdatedAt(new Date());

    let maxId = this.notes.length + 1;
    this.notes.forEach(note => {
      if (note.getId() > maxId) {
        maxId = note.getId();
      }
    });
    toCreate.setId(maxId + 1);

    this.notes.push(toCreate);
    return of<boolean>(true);
  }

  delete(toDelete: Note): Observable<any> {
    this.notes = this.notes.filter(note =>  {
      return note.getId() !== toDelete.getId();
    });

    return of<boolean>(true);
  }

  get(filter: Note): Observable<Note> {
    const filteredNotes: Observable<Array<Note>> = this.getAll(filter);
    return filteredNotes
      .pipe(
        map(notes => {
          return notes.pop();
        })
      );
  }

  getAll(filter: Note): Observable<Array<Note>> {
    if ((filter.getId() == null || filter.getId() === undefined || filter.getId() === 0)
      && (filter.getTitle() == null || filter.getTitle() === undefined || filter.getTitle().length === 0)
      && (filter.getTitle() == null || filter.getTitle() === undefined || filter.getTitle().length === 0)) {
      return of<Array<Note>>(this.notes);
    }

    const filteredNotes: Array<Note> = this.notes.filter(note => {
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

    return of<Array<Note>>(filteredNotes);
  }

  getById(id: number): Observable<Note> {
    return this.get(new Note().setId(id));
  }

  update(toUpdate: Note): Observable<any> {
    toUpdate.setUpdatedAt(new Date());

    const currentNoteObservable: Observable<Note> = this.getById(toUpdate.getId());
    currentNoteObservable
      .subscribe(note => {
        note.setTitle(
          toUpdate.getTitle() != null && toUpdate.getTitle().length > 0
            ? toUpdate.getTitle()
            : note.getTitle());
        note.setContent(
          toUpdate.getContent() != null && toUpdate.getContent().length > 0
            ? toUpdate.getContent()
            : note.getContent());

        let i = 0;
        for (const currentNote of this.notes) {
          if (currentNote.getId() === note.getId()) {
            this.notes[i] = note;
            break;
          }

          i++;
        }
      });

    return of<boolean>(true);
  }
}
