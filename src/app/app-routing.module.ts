import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesComponent} from './presentation/components/notes/notes.component';
import {NoteComponent} from './presentation/components/note/note.component';
import {NoteFormComponent} from './presentation/components/note-form/note-form.component';

const routes: Routes = [{
  path: '',
  component: NotesComponent
}, {
  path: 'notes',
  component: NotesComponent
}, {
  path: 'note/:id',
  component: NoteComponent
}, {
  path: 'note-form',
  component: NoteFormComponent
}, {
  path: 'note-form/:id',
  component: NoteFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
