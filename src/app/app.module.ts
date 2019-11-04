import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './presentation/components/notes/notes.component';
import { NoteComponent } from './presentation/components/note/note.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NavbarComponent } from './presentation/components/common/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
