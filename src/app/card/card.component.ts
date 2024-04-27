import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Work} from "../../model/work";
import {animate, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('creation', [
      transition(':enter', [
        query('.ah-card', [
          style({opacity: 0, transform: 'translateY(-3rem)'}),
          animate('1s cubic-bezier(.7, .01, .42, .54)',
            style({opacity: 1, transform: 'none'}))
        ])
      ]),
    ])
  ]
})
export class CardComponent implements OnInit {
  private _rootUrl = "https://covers.openlibrary.org/b/";

  @Input() work: Work | null | undefined
  @Output() workChange: EventEmitter<Work> = new EventEmitter();

  state: "spawning" | "spawned";

  cover: string | null = null;

  constructor() {
    this.state = "spawning";
  }

  ngOnInit(): void {
    this.state = "spawned";
    this.cover = `${this._rootUrl}olid/${this.work?.coverOlId}-M.jpg`;
  }
}
