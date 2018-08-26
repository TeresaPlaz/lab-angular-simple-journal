import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment'

@Injectable()
  
export class EntryService
{

  constructor ( private http: Http ) { }

  getList ()
  {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries`).pipe(map((res) => res.json()));
  }

  getEntry ( id )
  {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`).pipe(map((res) => res.json()));
  }

  addEntry (newEntry: object)
  {
    return this.http.post(`${environment.BASE_URL}/api/journal-entries`, newEntry).pipe(map((res) => res.json()));
  }
  

}
