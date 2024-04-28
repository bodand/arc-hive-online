import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from "./services/theme.service";

/**
 * The root component of the application.
 */
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  /**
   * Constructs the root component.
   * @param themeService The theme service for managing the theme.
   * @param router The router for navigating between pages.
   */
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

  /**
   * @inheritdoc
   */
  ngOnInit() {
    let splash = document.getElementById("splash");
    splash?.classList?.add("splash-close");
  }

  /**
   * Toggles the hamburger menu. Two-way bound to the UI element.
   */
  hamburger_open: boolean = false;

  /**
   * The current page of the application.
   */
  current_page: string;

  /**
   * The theme of the application.
   */
  theme: any;

  /**
   * Checks if the current page matches the given route.
   * @param to_check The route to check.
   */
  matches_route(to_check: string) {
    return new RegExp(`^/?${to_check}`).test(this.current_page);
  }
}
