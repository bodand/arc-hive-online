import {NgModule} from "@angular/core";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {
  AccordionModule,
  ButtonModule,
  IconModule,
  InputModule, LinkModule, TagModule,
  ThemeModule,
  TilesModule, TooltipModule,
  UIShellModule
} from "carbon-components-angular";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {provideRouter, RouterLink, RouterOutlet, withComponentInputBinding} from "@angular/router";
import {ThemeSelectorComponent} from "./theme-selector/theme-selector.component";
import {routes} from "./app.routes";
import {CardComponent} from "./card/card.component";
import {ListingsPageComponent} from "./listings-page/listings-page.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import {FormsModule} from "@angular/forms";
import {MarkdownModule, provideMarkdown} from "ngx-markdown";
import {DetailsPageComponent} from "./details-page/details-page.component";

/**
 * The main module for the application.
 */
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
    LinkModule,
    MarkdownModule,
    AccordionModule,
    TagModule,
    TooltipModule
  ],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
    provideMarkdown(),
  ],
  declarations: [
    DetailsPageComponent,
    AppComponent,
    ListingsPageComponent,
    SearchPageComponent,
    CardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
