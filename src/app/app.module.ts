import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,NbSidebarModule, NbSidebarService  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbSidebarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    //NbThemeModule,{ name: 'default' }
 //   NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
   // NbThemeModule.forRoot({ name: 'cosmic' }),

  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
https://coffeebytes.dev/estas-usando-mal-console-log-en-javascript/
const books = [{book: "Story of Your Life", author: "Ted Chiang"}, {book: "The last answer", author: "Isaac Asimov"}, {book: "do androids dream of electric sheep?", author: "Philip K. Dick"}]
console.table(books)
const specs = {ram: "HyperX FURY DDR4 8GB", processor: "Intel i7 8700K", "hdd": "Seagate Barracuda 3.5'', 1TB"}
console.dir(specs)

 */
