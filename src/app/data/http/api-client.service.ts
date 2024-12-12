import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lowercaseJsonKeys } from '../data';
import { BehaviorSubject, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private baseApiUrl: string;
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.baseApiUrl = environment.apiUrl;
  }

  get<T>(path: string) {
    path = this.cleanPath(path);
    this.loading$.next(true);

    return this.http
      .get<T>(`${this.baseApiUrl}/${path}`)
      .pipe(lowercaseJsonKeys())
      .pipe(
        finalize(() => {
          this.loading$.next(false);
        })
      );
  }

  private cleanPath(path: string) {
    return path.replace(/^\/+/, '');
  }
}
