import { Routes } from '@angular/router';

import {SearchPageComponent} from './search-page/search-page.component';
import {ListingsPageComponent} from './listings-page/listings-page.component';

export const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'results', component: ListingsPageComponent },
];
