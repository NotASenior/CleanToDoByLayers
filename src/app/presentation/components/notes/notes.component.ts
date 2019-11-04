import { Component, OnInit } from '@angular/core';
import {NotesView} from '../../view/notes-view';
import {NoteModel} from '../../model/note-model';
import {NotesPresenter} from '../../presenter/notes-presenter';
import {Observable} from 'rxjs';
import {NotesPresenterImpl} from './notes.presenter';

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
  }

  setNotes(notesObservable: Observable<NoteModel[]>) {
    notesObservable
      .subscribe(notes => {
        this.notes = notes;
      });
  }
}
