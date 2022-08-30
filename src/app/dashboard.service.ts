import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  url:string="https://localhost:44376/api/";
  constructor(private http:HttpClient) { }

  getCardDetailsbyUser(id:number):Observable<any>{
    let param = new HttpParams().set("id",id);
    return this.http.get<any>(this.url+"dashboard/", {params: param});
  }
  getProductPurchasedByUser(id: number):Observable<any>{
    let param = new HttpParams().set("id", id);
    return this.http.get<any>(this.url+"dashboard/productsPurchasedByUser/", {params:param});
  }
  getAmountPaidForProduct(id: number, productId: number):Observable<any>{
    console.log(productId);
    let params = new HttpParams()
    .set("userId", id)
    .set("productId", productId);
    return this.http.get<any>(this.url + "dashboard/getAmountPaidForProduct/", {params: params})
  }

  getRecentTransactions(id:number):Observable<any>{
    let param = new HttpParams().set("id",id);
    return this.http.get<any>(this.url+"dashboard/getRecentTransactions/", {params:param});
  }

  getUserById(id:number):Observable<any>{
    return this.http.get<any>(this.url + "user/"+id );
  }
}
