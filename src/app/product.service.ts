import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  url:string="https://localhost:44376/api/";
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>(this.url+"product");
  }
  getProductbyId(id:number):Observable<any>{
    return this.http.get<any>(this.url+"product/all/"+id);
  }
}
