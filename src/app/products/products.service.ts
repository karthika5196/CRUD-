import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient: HttpClient) { }

  createproduct(productbody): Observable<Product> {
    const producturl = 'http://localhost:3000/products';
    return this.httpclient.post<Product> (producturl, productbody);
  }
  getallproducts(): Observable<Product>{
    const producturl='http://localhost:3000/products';
    return this.httpclient.get<Product>(producturl);
  }
  getcategory(): Observable<Category>{
    const categoryurl='http://localhost:3000/categories';
    return this.httpclient.get<Category>(categoryurl);
  }
  viewproduct(productId):Observable<Product>{
    const producturl = 'http://localhost:3000/products/'+productId;
    return this.httpclient.get<Product> (producturl);
  }
  updateproduct(productId,productbody):Observable<Product>{
    const producturl = 'http://localhost:3000/products/'+productId;
    return this.httpclient.put<Product> (producturl,productbody);
  }
  deleteproduct(productId):Observable<Product>{
    const producturl = 'http://localhost:3000/products/'+productId;
    return this.httpclient.delete<Product> (producturl);
  }
  searchcategoryproduct(category_id):Observable<Product>{
    const producturl = 'http://localhost:3000/products?category_id='+category_id;
    return this.httpclient.get<Product> (producturl);
  }
  searchdateproduct(Date):Observable<Product>{
    const producturl = 'http://localhost:3000/products/date='+Date;
    return this.httpclient.get<Product> (producturl);
  }
}
