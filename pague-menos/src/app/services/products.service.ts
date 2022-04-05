import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:8080/products';

  constructor(
    private http: HttpClient
  ) { }

  //headers
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).
      pipe(
        tap(_ => this.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
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
