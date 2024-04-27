import {Injectable} from '@angular/core';
import {Theme} from "../../model/theme";
import {UserThemeService} from "./user-theme.service";

/**
 * A service that provides the theming functionality for the application.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _themes: Theme[] = [
    {name: "Lighter", key: "white"},
    {name: "Light", key: "g10"},
    {name: "Dark", key: "g90"},
    {name: "Darker", key: "g100"},
  ];
  private _theme: Theme;

  /**
   * Constructs the service. Loads the previously set theme, if it is available.
   */
  constructor(user_theme: UserThemeService) {
    let last = localStorage.getItem("ah-theme")
    if (last !== null) {
      this._theme = JSON.parse(last);
    } else {
      this._theme = this.get_theme_by_name(user_theme.get_user_theme());
    }
  }

  /**
   * Returns the list of available themes.
   */
  get themes(): Theme[] {
    return this._themes;
  }

  /**
   * Sets the currently selected them to the given theme.
   *
   * @param value The key of the theme to use.
   * @throws Error Invalid theme key specified.
   */
  set theme(value: string) {
    this._theme = this.get_theme_by_name(value);
    localStorage.setItem("ah-theme", JSON.stringify(this._theme));
  }

  /**
   * Returns the currently selected theme.
   */
  get theme(): string {
    return this._theme.key;
  }

  private get_theme_by_name(name: string): Theme {
    let newTheme = this._themes.find(t => t.name === name);
    if (newTheme === undefined) throw new Error("Theme does not exist");
    return newTheme;
  }
}
