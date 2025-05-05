import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'https://localhost:8001/api/v1/products';

  productImageUrl = 'https://localhost:8001/api/v1/products-images';

  constructor(private http:HttpClient) { }

  create(obj:any):Observable<any> {
    return this.http.post(this.baseUrl,{
      qty: obj.qty,
      unitPrice: obj.unitPrice,
      description: obj.description
    })
  }

  search(page:any, size:any, searchText:any):Observable<any> {
    let params:HttpParams = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', size);
    params = params.append('searchText', searchText);
    return this.http.get(this.baseUrl+'/list',{params: params});
  }

  delete(id:any):Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  update(obj:any,id:any):Observable<any> {
    return this.http.post(this.baseUrl+'/'+id ,{
      qty: obj.qty,
      unitPrice: obj.unitPrice,
      description: obj.description
    })
  }

  productImageUpload(data:FormData, productId:any):Observable<any> {
    return this.http.post(this.productImageUrl+'/'+productId,data)

  }
}
