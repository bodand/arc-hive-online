import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {IconModule, LinkModule} from "carbon-components-angular";

@Component({
  selector: 'app-startup-page',
  standalone: true,
  imports: [
    RouterLink,
    IconModule,
    LinkModule
  ],
  templateUrl: './startup-page.component.html',
  styleUrl: './startup-page.component.scss'
})
export class StartupPageComponent {

}
