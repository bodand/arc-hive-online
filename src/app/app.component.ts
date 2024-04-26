import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {IconModule, ThemeModule, UIShellModule} from "carbon-components-angular";
import {NgIf} from "@angular/common";
import {ThemeSelectorComponent} from "./theme-selector/theme-selector.component";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UIShellModule, ThemeModule, NgIf, IconModule, RouterLink, ThemeSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(themeService: ThemeService) {
    this.theme = themeService.theme;
  }

  ngOnInit() {
    let splash = document.getElementById("splash");
    splash?.classList?.add("splash-close");
  }

  hamburgerOpen: boolean = false;
  theme: any;
}
