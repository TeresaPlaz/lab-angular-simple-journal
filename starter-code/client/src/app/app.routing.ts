import { Routes } from '@angular/router';
import { EntrydetailsComponent } from './entrydetails/entrydetails.component';
import { EntryListComponent } from './entry-list/entry-list.component';

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: 'entry/:id', component: EntrydetailsComponent },
    { path: '**',  redirectTo: '', pathMatch: 'full' }
];