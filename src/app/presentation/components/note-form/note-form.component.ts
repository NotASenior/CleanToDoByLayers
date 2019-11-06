import { Component, OnInit } from '@angular/core';
import {NoteModel} from '../../model/note-model';
import {NoteFormView} from '../../view/note-form-view';
import {NoteFormPresenter} from '../../presenter/note-form-presenter';
import {NoteFormPresenterImpl} from './note-form.presenter';
import {Observable} from 'rxjs';
import {MaterializeHelper} from '../../materialize-helper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements NoteFormView, OnInit {
  private note: {
    title: string,
    content: string
  };
  private presenter: NoteFormPresenter;

  constructor(private router: Router) {
    this.note = {
      title: 'Nota nueva',
      content: ''
    };
    this.presenter = new NoteFormPresenterImpl(this);
  }

  ngOnInit() {
    MaterializeHelper.initPrefilledInputs();
    setTimeout(() => {
      MaterializeHelper.initPrefilledInputs();
    }, 100);
  }

  save() {
    this.presenter.save(new NoteModel()
      .setId(0)
      .setTitle(this.note.title)
      .setContent(this.note.content)
    );
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
