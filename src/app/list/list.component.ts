import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productlist: Product[] = [];
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
    this._service.getProducts().subscribe(data=>{
      this.productlist = data
    });
  }

}
