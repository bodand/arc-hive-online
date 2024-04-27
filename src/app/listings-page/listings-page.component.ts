import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {SearchService} from "../services/search.service";
import {Work} from "../../model/work";

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss'
})
export class ListingsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private search: SearchService,
  ) {
    this.query.subscribe(query => {
      if (query === undefined) return;
      this.search.findWorks(query).subscribe(results => {
        this._results.push(new Observable<Work>(x => {
          x.next(results)
          x.complete()
        }))
      })
    })
  }

  hasNoContent = true;
  query: Subject<string> = new Subject<string>();
  private _results: Observable<Work>[] = [];

  results: Observable<Work>[] = this._results;

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if (param["q"] !== undefined) {
        this.hasNoContent = false;
        this.query.next(param["q"]);
      }
    })
  }
}
