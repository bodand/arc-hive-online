import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Work} from "../../model/work";
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

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
  @Input() work: Work | null | undefined
  @Output() workChange: EventEmitter<Work> = new EventEmitter();
  state: "spawning" | "spawned";

  constructor() {
    this.state = "spawning";
  }

  ngOnInit(): void {
    this.state = "spawned";
  }
}
