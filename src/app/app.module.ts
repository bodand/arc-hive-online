import {NgModule} from "@angular/core";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {
  ButtonModule,
  IconModule,
  InputModule,
  ThemeModule,
  TilesModule,
  UIShellModule
} from "carbon-components-angular";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {ThemeSelectorComponent} from "./theme-selector/theme-selector.component";
import {routes} from "./app.routes";
import {CardComponent} from "./card/card.component";
import {ListingsPageComponent} from "./listings-page/listings-page.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThemeModule,
    HttpClientModule,
    RouterOutlet,
    UIShellModule,
    ThemeSelectorComponent,
    RouterLink,
    IconModule,
    InputModule,
    FormsModule,
    ButtonModule,
    TilesModule,
  ],
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
  ],
  declarations: [AppComponent, ListingsPageComponent, SearchPageComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
