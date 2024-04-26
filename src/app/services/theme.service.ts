import {Injectable} from '@angular/core';
import {Theme} from "../../model/theme";

/**
 * A service that provides the theming functionality for the application.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _themes: Theme[] = [
    {name: "White", key: "white"},
    {name: "Dark", key: "g10"},
    {name: "Darker", key: "g90"},
    {name: "Darkest", key: "g100"},
  ];
  private _theme: Theme = this._themes[2];

  /**
   * Constructs the service. Loads the previously set theme, if it is available.
   */
  constructor() {
    let last = localStorage.getItem("ah-theme")
    if (last !== null) this._theme = JSON.parse(last);
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
    let newTheme = this._themes.find(t => t.name === value);
    if (newTheme === undefined) throw new Error("Theme does not exist");

    localStorage.setItem("ah-theme", JSON.stringify(this._theme));
    this._theme = newTheme;
  }

  /**
   * Returns the currently selected theme.
   */
  get theme(): string {
    return this._theme.key;
  }
}
