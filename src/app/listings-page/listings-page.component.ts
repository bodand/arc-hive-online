import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {SearchService} from "../services/search.service";
import {Work} from "../../model/work";

/**
 * A component for displaying a list of books. The list is generated from a
 * search query given in the URL as a query parameter.
 */
@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss'
})
export class ListingsPageComponent implements OnInit {
  /**
   * Constructs the listings page component.
   * @param route The current route of the application.
   * @param search The search service for finding books.
   */
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

  private _results: Observable<Work>[] = [];

  /**
   * Whether the page has no content to display.
   */
  hasNoContent = true;

  /**
   * The query string to search for. Emits when the query changes.
   */
  query: Subject<string> = new Subject<string>();

  /**
   * The results of the search query.
   */
  results: Observable<Work>[] = this._results;

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if (param["q"] !== undefined) {
        this.hasNoContent = false;
        this.query.next(param["q"]);
      }
    })
  }
}
