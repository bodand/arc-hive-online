import {Component} from '@angular/core';
import {SimpleSearch} from "../../model/simple_search";
import {ComplexSearch} from "../../model/complex_search";
import {SearchField} from "../../model/search_field";
import {Router} from "@angular/router";

/**
 * A component for searching for books.
 */
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  /**
   * The simple search field. Used for simple search queries.
   */
  simple: SimpleSearch = new SimpleSearch();

  /**
   * The complex search field. Used for complex search queries.
   * Connected to multiple input fields.
   */
  complex: ComplexSearch = new ComplexSearch();

  /**
   * Constructs the search page component.
   * @param router The router for navigating to search results.
   */
  constructor(private router: Router) {
  }

  /**
   * Initiates the search for books based on the search field.
   * @param search The search field to use.
   */
  search(search: SearchField) {
    const query = search.to_query_string();
    this.router.navigate(['/results'], {queryParams: {q: query}});
  }
}
