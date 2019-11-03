import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesComponent} from './presentation/components/notes/notes.component';
import {NoteComponent} from './presentation/components/note/note.component';

const routes: Routes = [{
  path: 'notes',
  component: NotesComponent
}, {
  path: 'note/:id',
  component: NoteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
