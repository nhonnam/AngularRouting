import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})

export class ConfigService {

  //configUrl = 'assets/config.json';
  configUrl = 'https://6423b55077e7062b3e37476f.mockapi.io/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  getConfig(): Observable<Post> {
    return this.http
      .get<Post>(this.configUrl)
      .pipe(catchError(this.handleError));
  }

  addPost(hero: Post): Observable<Post> {
    return this.http.post<Post>(this.configUrl, hero, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // getConfigResponse(): Observable<HttpResponse<any>> {
  //   return this.http.get<any>(
  //     this.configUrl, { observe: 'response' });
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
