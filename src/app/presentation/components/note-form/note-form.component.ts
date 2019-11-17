import {
  Component,
  OnInit,
} from '@angular/core';
import {NoteModel} from '../../model/note-model';
import {NoteFormView} from '../../view/note-form-view';
import {NoteFormPresenter} from '../../presenter/note-form-presenter';
import {NoteFormPresenterImpl} from './note-form.presenter';
import {Observable} from 'rxjs';
import {MaterializeHelper} from '../../materialize-helper';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageModel} from '../../model/image-model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements NoteFormView, OnInit {
  public note: NoteModel;
  private presenter: NoteFormPresenter;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public domSanitizer: DomSanitizer) {
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

  onImageSelect(event: any) {
    const reader = new FileReader();
    const readerBase64 = new FileReader();
    const selectedFile = event.target.files[0];

    reader.onloadend = () => {
      const realMimeType: string = this.getRealMimeType(reader);
      if (realMimeType !== 'unknown') {
        readerBase64.readAsDataURL(selectedFile);
      } else {
        alert('Please upload a valid image file');
      }
    };

    reader.readAsArrayBuffer(selectedFile);

    readerBase64.onloadend = () => {
      const base64 = readerBase64.result.toString();
      this.note.addImage(new ImageModel()
        .setContent(base64));
      setTimeout(() => {
        MaterializeHelper.initMaterialBoxed();
      }, 100);
    };
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

  private getRealMimeType(reader) {
    const arrResult = (new Uint8Array(reader.result)).subarray(0, 4);

    let header = '';
    for (const arr of arrResult) {
      header += arr.toString(16);
    }

    switch (header) {
      case '89504e47':
        return 'image/png';
      case '47494638':
        return 'image/gif';
      case 'ffd8ffDB':
      case 'ffd8ffe0':
      case 'ffd8ffe1':
      case 'ffd8ffe2':
      case 'ffd8ffe3':
      case 'ffd8ffe8':
        return 'image/jpeg';
      default:
        return 'unknown';
    }
  }
}
