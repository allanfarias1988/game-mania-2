import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) {}

  getNoticias(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
}
