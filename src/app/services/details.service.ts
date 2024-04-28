import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {audit, from, map, merge, mergeAll, mergeMap, Observable, of, scheduled, toArray} from "rxjs";
import {WorkDetails} from "../../model/work_details";
import {WorkDetailsDto} from "../../model/dto/work_details";
import {AuthorDto} from "../../model/dto/author";
import {Author} from "../../model/author";
import {Bookshelf} from "../../model/bookshelf";
import {BookshelfDto} from "../../model/dto/bookshelf";

/**
 * Service for retrieving the details from a given book.
 */
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  /**
   * Constructs the details service.
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  private _rootUrl = "https://openlibrary.org";

  /**
   * Returns the details object for the book specified by its OpenLibrary ID.
   * @param olid The OlId of the book.
   */
  getDetails(olid: string): Observable<WorkDetails> {
    const url = `${this._rootUrl}${olid}.json`;

    return this.http
      .get<WorkDetailsDto>(url, {})
      .pipe(
        mergeMap(workDetailsDto => {
          return from(workDetailsDto.authors?.map(
            dto => {
              return this.getAuthors(dto.author.key)
            }
          ) || [])
            .pipe(
              mergeAll(),
              toArray(),
              map((authors) => {
                  return new WorkDetails(workDetailsDto, authors);
                }
              ))
        }),
      )
  }

  /**
   * Returns statistics about the book using the Bookshelf API.
   * @param olid The OlId of the book.
   */
  getBookshelfData(olid: string): Observable<Bookshelf> {
    const url = `${this._rootUrl}${olid}/bookshelves.json`;
    return this.http
      .get<{ counts: BookshelfDto }>(url, {})
      .pipe(
        map(dto => new Bookshelf(dto.counts)));
  }

  private getAuthors(olid: string): Observable<Author> {
    const url = `${this._rootUrl}${olid}.json`;
    return this.http.get<AuthorDto>(url, {})
      .pipe(
        map(dto => new Author(dto)))
  }
}
