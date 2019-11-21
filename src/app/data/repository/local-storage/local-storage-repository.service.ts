import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import {Note} from '../../../domain/entity/note';
import {NoteRepository} from '../../../domain/repository/note-repository';
import {RepositoryMapper} from '../mapper/repository-mapper';
import {MapperFactory} from '../../../dependency/mapper.factory';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageRepository implements NoteRepository {
  private mapper: RepositoryMapper<any, Note> = MapperFactory.getLocalStorageMapper();

  notes: Array<Note> = new Array<Note>();

  constructor() {
    this.init();
  }

  private init() {
    const notesJson: string = localStorage.getItem('notes');
    if (notesJson && notesJson !== '') {
      const notes: Array<Note> = JSON.parse(notesJson);
      this.notes = this.mapper.mapList(notes);
    } else {
      this.createDefaultNote();
    }
  }

  private createDefaultNote() {
    this.notes.push(new Note()
      .setId(0)
      .setTitle('Demo')
      .setActive(true)
      .setContent('Crea tus notas. Estas se conservarán :)')
      .setCreatedAt(new Date())
      .setUpdatedAt(new Date()));
  }

  private updateNotes() {
    const notes: string = JSON.stringify(this.notes);
    localStorage.setItem('notes', notes);
  }

  create(toCreate: Note): Observable<any> {
    toCreate.setActive(true);
    toCreate.setCreatedAt(new Date());
    toCreate.setUpdatedAt(new Date());

    let maxId = this.notes.length + 1;
    this.notes.forEach((note: Note) => {
      if (note.getId() > maxId) {
        maxId = note.getId();
      }
    });
    toCreate.setId(maxId + 1);

    this.notes.push(toCreate);

    this.updateNotes();
    return of<boolean>(true);
  }

  delete(toDelete: Note): Observable<any> {
    this.notes = this.notes.filter(note =>  {
      return note.getId() !== toDelete.getId();
    });

    this.updateNotes();
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

    this.updateNotes();
    return of<boolean>(true);
  }
}
