import { Component } from '@angular/core';
import {ButtonModule, IconModule, InputModule} from "carbon-components-angular";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    InputModule,
    ButtonModule,
    IconModule
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

}
