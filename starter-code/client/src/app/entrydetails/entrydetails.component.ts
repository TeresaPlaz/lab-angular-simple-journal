import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entrydetails',
  templateUrl: './entrydetails.component.html',
  styleUrls: ['./entrydetails.component.css']
})
export class EntrydetailsComponent implements OnInit {
  entry: any;

  constructor(private detailsService: EntryService, private route: ActivatedRoute) { }

  ngOnInit ()
  {
    this.route.params.subscribe( params =>
    {
      this.getEntryDetails( params[ 'id' ] );
    } );
  }

  getEntryDetails(id) {
    this.detailsService.getEntry(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  }

}
