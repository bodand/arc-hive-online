import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {InputModule, LoadingModule} from "carbon-components-angular";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Subject} from "rxjs";
import {SearchService} from "../services/search.service";
import {Work} from "../../model/work";

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [
    LoadingModule,
    NgIf,
    RouterLink,
    InputModule,
    FormsModule,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss'
})
export class ListingsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private search: SearchService,
  ) {
    this.query.subscribe(query => {
      console.log('query', query);
      if (query === undefined) return;
      this.search.findWorks(query).subscribe(results => {
        console.log('results', results);
        this._resultsArray.push(results);
        this.results.next(this._resultsArray)
      })
    })
  }

  hasNoContent = true;
  query: Subject<string> = new Subject<string>();
  private _resultsArray: Work [] = []
  results: Subject<Work[]> = new Subject<Work[]>();

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if (param["q"] !== undefined) {
        this.hasNoContent = false;
        this.query.next(param["q"]);
      }
    })
  }
}
