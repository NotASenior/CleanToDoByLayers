import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './presentation/components/notes/notes.component';
import { NoteComponent } from './presentation/components/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
