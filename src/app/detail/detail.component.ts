import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;
  images: string[] = [];
  selectedEmiType: string;
  startingEmiPrice: number = 45;
  numberOfMonths: number;

  constructor(private _service: ProductService, private route: Router, private activatroute: ActivatedRoute) {
   }

  ngOnInit(): void {
    let id = this.activatroute.snapshot.params["id"];
    this._service.getProductbyId(id).subscribe(data=>
      {
        this.product = data;
        this.images.push(this.product.productImageAddress);
        this.images.push(this.product.productImageAddress);

      });
  }
  onChange(emiType: string) {
    console.log(emiType);
    this.numberOfMonths = Number(emiType.slice(0,2));
    this.startingEmiPrice = this.product.productPrice/this.numberOfMonths;
    
}
  
}
