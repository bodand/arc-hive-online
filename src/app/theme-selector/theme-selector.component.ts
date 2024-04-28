import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeService} from "../services/theme.service";
import {DropdownModule, ListItem} from "carbon-components-angular";

/**
 * A component for selecting the theme of the application.
 */
@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [
    DropdownModule
  ],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  /**
   * The list of themes to choose from.
   */
  themes: ListItem[];

  /**
   * The current theme of the application.
   */
  @Input() theme: string

  /**
   * An event emitter for when the theme changes.
   */
  @Output() themeChange: EventEmitter<string> = new EventEmitter();

  /**
   * Constructs the theme selector component. Sets the initial theme to the
   * current theme of the theme service.
   * @param themeService The theme service for managing the theme.
   */
  constructor(private themeService: ThemeService) {
    this.theme = themeService.theme
    this.themeChange.emit(this.theme);
    this.themes = themeService.themes.map(x => {
      return {content: x.name, selected: x.key === this.theme}
    });
  }

  /**
   * Handles the selection of a theme from the dropdown.
   * @param $event The event containing the selected item.
   */
  selecteditem($event: { item: ListItem; isUpdate?: boolean } | ListItem[]) {
    let trueEvent = <{ item: ListItem }>$event;
    this.themeService.theme = trueEvent.item.content;
    this.theme = this.themeService.theme
    this.themeChange.emit(this.theme);
  }
}
