import { Component, OnInit } from '@angular/core';
import {NoteView} from '../../view/note-view';
import {NoteModel} from '../../model/note-model';
import {Observable} from 'rxjs';
import {NotePresenter} from '../../presenter/note-presenter';
import {NotePresenterImpl} from './note.presenter';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements NoteView, OnInit {
  public note: NoteModel;
  private presenter: NotePresenter;

  constructor(private route: ActivatedRoute) {
    this.note = new NoteModel();
    this.presenter = new NotePresenterImpl(this);
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.presenter.getNote(id);
  }

  setNote(noteObservable: Observable<NoteModel>) {
    noteObservable
      .subscribe(note => {
        this.note = note;
      });
  }
}
