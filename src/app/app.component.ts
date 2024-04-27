import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {IconModule, ThemeModule, UIShellModule} from "carbon-components-angular";
import {NgIf} from "@angular/common";
import {ThemeSelectorComponent} from "./theme-selector/theme-selector.component";
import {ThemeService} from "./services/theme.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UIShellModule,
    ThemeModule,
    NgIf,
    IconModule,
    RouterLink,
    ThemeSelectorComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(themeService: ThemeService,
              router: Router) {
    this.current_page = router.url;
    this.theme = themeService.theme;
    router.events.subscribe(event => {
      if (event.type === 1) {
        const args = event as { url?: string, urlAfterRedirects?: string };
        const url = this.get_true_url(args)
        if (url === undefined) return;

        this.current_page = url;
      }
    })
  }

  private get_true_url(event: { url?: string, urlAfterRedirects?: string }): string | undefined {
    if (event.urlAfterRedirects !== undefined) return event.urlAfterRedirects;
    if (event.url !== undefined) return event.url;
    return undefined;
  }

  ngOnInit() {
    let splash = document.getElementById("splash");
    splash?.classList?.add("splash-close");
  }

  hamburger_open: boolean = false;
  current_page: string;
  theme: any;
  protected readonly RegExp = RegExp;

  matches_route(to_check: string) {
    return new RegExp(`^/?${to_check}`).test(this.current_page);
  }
}
