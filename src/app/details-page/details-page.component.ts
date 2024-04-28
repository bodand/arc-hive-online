import {Component, Input} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {WorkDetails} from "../../model/work_details";
import {DetailsService} from "../services/details.service";
import {ThemeService} from "../services/theme.service";
import {Bookshelf} from "../../model/bookshelf";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent {
  private _cover_url = "https://covers.openlibrary.org/w/";
  private _cover_src: Subject<string> = new Subject<string>();

  work$: Observable<WorkDetails> = null!;
  stats$: Observable<Bookshelf> = null!;
  cover$: Observable<string> = this._cover_src.asObservable();
  theme$: Observable<any>;

  constructor(
    private service: DetailsService,
    themes: ThemeService
  ) {
    this.theme$ = themes.theme$;
  }

  @Input()
  set id(olid: string) {
    this.stats$ = this.service.getBookshelfData(olid);
    this.work$ = this.service.getDetails(olid);
    this.work$.subscribe(details => {
      if (details.cover === undefined) return
      const url = `${this._cover_url}id/${details.cover}.jpg`;

      this._cover_src.next(url);
    })
  }
}

