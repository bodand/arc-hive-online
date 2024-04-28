import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkDto} from "../../model/dto/work";
import {Work} from "../../model/work";

/**
 * The payload type for the book search response.
 */
interface WorkPayload {
  numFound: number;
  docs: WorkDto[];
}

/**
 * Service for searching for books.
 */
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  /**
   * Constructs the search service.
   * @param http The HTTP client to use for requests.
   */
  constructor(private http: HttpClient) {
  }

  private _rootUrl = "https://openlibrary.org/search.json";
  private _fields = "author_name,key,title,cover_edition_key,first_publish_year,ebook_access,ratings_average,ratings_count,subject,isbn";

  /**
   * Finds works that match the given query string.
   * @param query_string The query string to search for.
   */
  findWorks(query_string: string): Observable<Work> {
    return new Observable<Work>(sub => {
      const url = `${this._rootUrl}?q=${query_string}&fields=${this._fields}&mode=everything&limit=500`;
      const payload = this.http.get<WorkPayload>(url);
      payload.subscribe({
        next(dto) {
          dto.docs.forEach(x => {
            sub.next(new Work(x));
          })
        },
        complete() {
          sub.complete();
        }
      })
    });
  }
}
