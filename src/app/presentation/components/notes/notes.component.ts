import {Component, OnInit} from '@angular/core';
import {NotesView} from '../../view/notes-view';
import {NoteModel} from '../../model/note-model';
import {NotesPresenter} from '../../presenter/notes-presenter';
import {Observable} from 'rxjs';
import {NotesPresenterImpl} from './notes.presenter';
import {MaterializeHelper} from '../../materialize-helper';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements NotesView, OnInit {
  public notes: Array<NoteModel>;
  public noteToDelete: NoteModel;
  private presenter: NotesPresenter;

  constructor(public domSanitizer: DomSanitizer) {
    this.notes = new Array<NoteModel>();
    this.presenter = new NotesPresenterImpl(this);
  }

  ngOnInit() {
    this.presenter.getNotes(new NoteModel());
    MaterializeHelper.initFab();
    MaterializeHelper.initFeatureDiscovery();

    setTimeout(() => {
      MaterializeHelper.initMaterialBoxed();
    }, 100);
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
    responseObservable.subscribe( response => {
      this.presenter.getNotes(new NoteModel());
    });
  }

  setNoteToDelete(note: NoteModel) {
    this.noteToDelete = note;
  }
}
