import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {WorkDetails} from "../../model/work_details";
import {DetailsService} from "../services/details.service";
import {ThemeService} from "../services/theme.service";
import {Bookshelf} from "../../model/bookshelf";

/**
 * A component for displaying the details of a book.
 */
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent implements OnInit {
  private _cover_url = "https://covers.openlibrary.org/w/";
  private _cover_src: Subject<string> = new Subject<string>();

  /**
   * The book details to display. Steams from the OpenLibrary API.
   */
  work$: Observable<WorkDetails> = null!;

  /**
   * The statistics about the book. Streams from the Bookshelf API.
   */
  stats$: Observable<Bookshelf> = null!;

  /**
   * The cover image URL. Streams from the OpenLibrary API.
   */
  cover$: Observable<string> = this._cover_src.asObservable();

  /**
   * The theme of the application. Used as an initial value for the theme
   * selector, since the theme service's observable is not yet available.
   */
  theme: string | null = null;

  /**
   * The theme as an observable, to allow for dynamic theme changes.
   */
  theme$: Observable<any> = null!;

  /**
   * Constructs the details page component.
   * @param service The service for retrieving book details.
   * @param themes The theme service.
   */
  constructor(
    private service: DetailsService,
    private themes: ThemeService
  ) {
    this.theme = this.themes.theme;
  }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    this.theme$ = this.themes.theme$;
    this.theme$.subscribe(_ => {
      this.theme = null;
    })
  }

  /**
   * Sets the OpenLibrary ID of the book to display.
   * @param olid The OpenLibrary ID of the book.
   */
  @Input()
  set id(olid: string) {
    this.stats$ = this.service.getBookshelfData(olid);
    this.work$ = this.service.getDetails(olid);
    this.work$.subscribe(details => {
      if (details.cover === undefined) return
      const url = `${this._cover_url}id/${details.cover}.jpg`;

      this._cover_src.next(url);
    })
  }
}

