import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EntryService } from './entry.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntrydetailsComponent } from './entrydetails/entrydetails.component';
import { EntryFormComponent } from './entry-list/entry-form/entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntrydetailsComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
