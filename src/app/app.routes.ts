import {Routes} from '@angular/router';

import {SearchPageComponent} from './search-page/search-page.component';
import {ListingsPageComponent} from './listings-page/listings-page.component';
import {StartupPageComponent} from "./startup-page/startup-page.component";
import {DetailsPageComponent} from "./details-page/details-page.component";

/**
 * The routes for the application.
 */
export const routes: Routes = [
  {path: '', component: StartupPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'results', component: ListingsPageComponent},
  {path: 'details/:id', component: DetailsPageComponent},
];
