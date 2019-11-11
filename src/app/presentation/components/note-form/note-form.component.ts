import { Component, OnInit } from '@angular/core';
import {NoteModel} from '../../model/note-model';
import {NoteFormView} from '../../view/note-form-view';
import {NoteFormPresenter} from '../../presenter/note-form-presenter';
import {NoteFormPresenterImpl} from './note-form.presenter';
import {Observable} from 'rxjs';
import {MaterializeHelper} from '../../materialize-helper';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements NoteFormView, OnInit {
  private note: NoteModel;
  private presenter: NoteFormPresenter;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.presenter = new NoteFormPresenterImpl(this);
  }

  ngOnInit() {
    MaterializeHelper.initPrefilledInputs();
    setTimeout(() => {
      MaterializeHelper.initPrefilledInputs();
    }, 100);
    this.setNoteOrDefault();
  }

  private setNoteOrDefault() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id === 0) {
      this.note = new NoteModel()
        .setId(0)
        .setTitle('Nota nueva')
        .setContent('');
    } else {
      this.presenter.getNote(id);
    }
  }

  setNote(noteObservable: Observable<NoteModel>) {
    noteObservable
      .subscribe(note => {
        this.note = note;
      });
  }

  save() {
    this.presenter.save(this.note);
  }

  onSaveResponse(response: Observable<any>) {
    response.subscribe(savingResponse => {
      if (savingResponse.errors && savingResponse.errors.length > 0) {
        MaterializeHelper.showToast(savingResponse.errors[0]);
        return;
      }

      MaterializeHelper.showToast('Guardado!');
      this.router.navigateByUrl('/notes');
    });
  }
}
