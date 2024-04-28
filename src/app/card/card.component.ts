import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Work} from "../../model/work";
import {animate, query, style, transition, trigger} from "@angular/animations";

/**
 * The card component for displaying a book.
 */
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

  /**
   * The book to display.
   */
  @Input() work: Work | null | undefined

  /**
   * Emits when the book is changed.
   */
  @Output() workChange: EventEmitter<Work> = new EventEmitter();

  /**
   * The state of the card.
   */
  state: "spawning" | "spawned";

  /**
   * The URL of the cover image.
   */
  cover: string | null = null;

  /**
   * Constructs the card component.
   */
  constructor() {
    this.state = "spawning";
  }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    this.state = "spawned";
    this.cover = `${this._rootUrl}olid/${this.work?.coverOlId}-M.jpg`;
  }
}
