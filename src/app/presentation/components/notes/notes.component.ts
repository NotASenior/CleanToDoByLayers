import {Component, OnInit} from '@angular/core';
import {NotesView} from '../../view/notes-view';
import {NoteModel} from '../../model/note-model';
import {NotesPresenter} from '../../presenter/notes-presenter';
import {Observable} from 'rxjs';
import {NotesPresenterImpl} from './notes.presenter';
import {MaterializeHelper} from '../../materialize-helper';

declare var M;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements NotesView, OnInit {
  private notes: Array<NoteModel>;
  private presenter: NotesPresenter;
  private noteToDelete: NoteModel;

  constructor() {
    this.notes = new Array<NoteModel>();
    this.presenter = new NotesPresenterImpl(this);
  }

  ngOnInit() {
    this.presenter.getNotes(new NoteModel());
    MaterializeHelper.initFab();
  }

  setNotes(notesObservable: Observable<NoteModel[]>) {
    notesObservable
      .subscribe(notes => {
        this.notes = notes;
      });
  }

  delete(note: NoteModel) {
    this.presenter.deleteNote(note);
  }

  onNoteDelete(responseObservable: Observable<any>) {
    responseObservable.subscribe(response => {
      this.presenter.getNotes(new NoteModel());
    });
  }

  setNoteToDelete(note: NoteModel) {
    this.noteToDelete = note;
  }
}
