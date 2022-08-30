import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card';
import { Product } from 'src/models/product';
import { User } from 'src/models/user';
import { Transaction } from 'src/models/transaction';
import { ProductService } from '../product.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cardData: Card;
  id:any;
  productPurchased: Product;
  productId: number;
  amountPaid: number;
  user: User;
  transactionlist: Transaction[] = [];
  t_product: Product;

  constructor(private _service: DashboardService, private _service1: ProductService) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem("userId")
    this._service.getUserById(this.id).subscribe(data=>{
      console.log(data)
      this.user = data;
    })
    this._service.getCardDetailsbyUser(this.id).subscribe(data=>{
      this.cardData = data
    });

    this._service.getProductPurchasedByUser(this.id).subscribe(data=>{
      this.productPurchased = data;
      console.log(this.id);
      this._service.getAmountPaidForProduct(this.id, this.productPurchased.productId).subscribe(data =>{
        console.log("getamountpaidfor product: "+this.productPurchased.productId);
        this.amountPaid = data;
      });
    });

    this._service.getRecentTransactions(this.id).subscribe(data=>{
      console.log("Id" + this.id);
      this.transactionlist = data;

      for(let transaction of this.transactionlist ){
        this._service1.getProductbyId(transaction.productId).subscribe(data => {
          this.t_product = data;
        })
      }
    });
    
    
   
  }

}
