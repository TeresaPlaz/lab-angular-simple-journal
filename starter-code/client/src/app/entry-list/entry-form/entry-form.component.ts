import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../entry.service';
import { Router, ActivatedRoute }    from "@angular/router";

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  newEntry: object = {};

  constructor(private NewEntries: EntryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

submitForm(NewEntry) {
    this.newEntry = {
        title: NewEntry.value.title,
        content: NewEntry.value.content
    };
    console.log(this.newEntry);
    if (!NewEntry.value.title) {
        alert("Please fill out the title");
    } else {
        this
            .NewEntries
            .addEntry(this.newEntry)
            .subscribe(() => {
                this
                    .router
                    .navigate(['']);
            });
    }
}

}
