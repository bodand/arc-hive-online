import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkDto} from "../../model/dto/work";
import {Work} from "../../model/work";

interface WorkPayload {
  numFound: number;
  docs: WorkDto[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {

  }

  private _rootUrl = "https://openlibrary.org/search.json";
  private _fields = "author_name,key,title,cover_edition_key,first_publish_year,ebook_access,ratings_average,ratings_count,subject,isbn";

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
