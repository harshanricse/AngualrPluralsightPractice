import { computed, Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { IProduct } from './product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private resource : HttpResourceRef<IProduct[] | undefined> = httpResource(() => '/api/products');

  getProducts() {
    return computed(() => this.resource.value() ?? []);
  }
}
