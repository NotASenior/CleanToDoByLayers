import { Component, OnInit } from '@angular/core';
import {NotesView} from '../../view/notes-view';
import {NoteModel} from '../../model/note-model';
import {NotesPresenter} from '../../presenter/notes-presenter';
import {Observable} from 'rxjs';
import {NotesPresenterImpl} from './notes.presenter';

declare var M;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements NotesView, OnInit {
  private notes: Array<NoteModel>;
  private presenter: NotesPresenter;

  constructor() {
    this.notes = new Array<NoteModel>();
    this.presenter = new NotesPresenterImpl(this);
  }

  ngOnInit() {
    this.presenter.getNotes(new NoteModel());
    this.initMaterializeElements();
  }

  private initMaterializeElements() {
    document.addEventListener('DOMContentLoaded', () => {
      const fab = document.querySelectorAll('.fixed-action-btn');
      M.FloatingActionButton.init(fab, {});
    });
  }

  setNotes(notesObservable: Observable<NoteModel[]>) {
    notesObservable
      .subscribe(notes => {
        this.notes = notes;
      });
  }

  delete(note: NoteModel) {
    if (confirm('Desea eliminar la nota?')) {
      this.presenter.deleteNote(note);
    }
  }

  onNoteDelete(responseObservable: Observable<any>) {
    responseObservable.subscribe(response => {
      this.presenter.getNotes(new NoteModel());
    });
  }
}
