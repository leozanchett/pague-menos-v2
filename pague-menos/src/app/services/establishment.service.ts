import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { Establishment } from '../models/establishment';
import { Urls } from '../models/urls';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private readonly url = Urls.baseURL + '/establishment';
  private establishments: Establishment[] = [];

  constructor(
    private http: HttpClient
  ) { }


  //GET all establishments
  getPromissesEstablishments(): Promise<Establishment[]> {
    return lastValueFrom(this.http.get<Establishment[]>(this.url));
  }

  private log(message: String) {
    console.log(`Products Service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
