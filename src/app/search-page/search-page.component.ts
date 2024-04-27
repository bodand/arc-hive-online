import {Component} from '@angular/core';
import {ButtonModule, IconModule, InputModule} from "carbon-components-angular";
import {SimpleSearch} from "../../model/simple_search";
import {ComplexSearch} from "../../model/complex_search";
import {FormsModule} from "@angular/forms";
import {SearchField} from "../../model/search_field";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    InputModule,
    ButtonModule,
    IconModule,
    FormsModule
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  simple: SimpleSearch = new SimpleSearch();
  complex: ComplexSearch = new ComplexSearch();

  constructor(private router: Router) {
  }

  search(search: SearchField) {
    const query = search.to_query_string();
    this.router.navigate(['/results'], {queryParams: {q: query}});
  }
}
