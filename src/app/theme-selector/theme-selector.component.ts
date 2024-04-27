import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeService} from "../services/theme.service";
import {DropdownModule, ListItem} from "carbon-components-angular";

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
  themes: ListItem[];

  @Input()
  theme: string
  @Output()
  themeChange: EventEmitter<string> = new EventEmitter();

  constructor(private themeService: ThemeService) {
    this.theme = themeService.theme
    this.themeChange.emit(this.theme);
    this.themes = themeService.themes.map(x => {
      return {content: x.name, selected: x.key === this.theme}
    });
  }

  selecteditem($event: { item: ListItem; isUpdate?: boolean } | ListItem[]) {
    let trueEvent = <{ item: ListItem }>$event;
    this.themeService.theme = trueEvent.item.content;
    this.theme = this.themeService.theme
    this.themeChange.emit(this.theme);
  }
}
