import { Component, OnInit } from '@angular/core';
import {NoteView} from '../../view/note-view';
import {NoteModel} from '../../model/note-model';
import {Observable} from 'rxjs';
import {NotePresenter} from '../../presenter/note-presenter';
import {NotePresenterImpl} from './note.presenter';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MaterializeHelper} from '../../materialize-helper';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements NoteView, OnInit {
  public note: NoteModel;
  private presenter: NotePresenter;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
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
        if (!note) {
          this.router.navigateByUrl('/notes');
          return;
        }

        this.note = note;
        setTimeout(() => {
          MaterializeHelper.initMaterialBoxed();
        }, 100);
      });
  }
}
