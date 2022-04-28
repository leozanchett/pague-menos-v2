import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, of, tap } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../models/urls';
import { CheaperProduct } from '../models/cheaper-product';


@Injectable({
  providedIn: 'root'
})
export class CheaperProductsService {

  private readonly url = Urls.baseURL + '/cheaper';

  private cheaperProducts: CheaperProduct[] = [];

  constructor(
    private http: HttpClient
  ) { }

  //headers
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  findProductsByName(name: string, products: CheaperProduct[]): Observable<CheaperProduct[]> {
    return of(products.filter(product => product.description.toLowerCase().includes(name.toLowerCase())));
  }

  // GET
  getCheaperProducts(): Observable<CheaperProduct[]> {
      return this.http.get<CheaperProduct[]>(this.url).pipe(
        tap(products => {
          this.log('fetched products');
          this.cheaperProducts = products;
        }),
        catchError(this.handleError('getProducts', []))
      );
  }

  getPromissesProducts(): Promise<CheaperProduct[]> {
    return lastValueFrom(this.http.get<CheaperProduct[]>(this.url));
  }

  private log(message: String) {
    console.log(`CheaperProducts Service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
