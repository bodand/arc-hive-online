import {Injectable} from '@angular/core';

export type ThemeVariant = "dark" | "light";

/**
 * A service for querying the user's current theme preferences.
 */
@Injectable({
  providedIn: 'root'
})
export class UserThemeService {
  /**
   * Constructs the service.
   */
  constructor() {
  }

  /**
   * Gets the current system theme.
   */
  get_user_theme(): ThemeVariant {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light";
  }
}
