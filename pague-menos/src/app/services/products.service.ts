import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, of, pipe, retry, tap } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../models/urls';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly url = Urls.baseURL + '/products';

  private produts: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  //headers
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  findProductsByName(name: string, products: Product[]): Observable<Product[]> {
    return of(products.filter(product => product.description.toLowerCase().includes(name.toLowerCase())));
  }

  // GET
  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.url).pipe(
        tap(products => {
          this.log('fetched products');
          this.produts = products;
        }),
        catchError(this.handleError('getProducts', []))
      );
  }

  getPromissesProducts(): Promise<Product[]> {
    return lastValueFrom(this.http.get<Product[]>(this.url));
  }

  // POST product
  postProduct(product: Product): void {
    this.http.options(this.url, { headers: this.headers });
    this.http.post<Product>(this.url, product, { headers: this.headers }).
      subscribe(
        data => {
          console.log(data);
        },
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
