import { Component, OnInit } from '@angular/core';
import{Iproducts} from '../product-list/product';
import{MatCardModule} from '@angular/material/card';
import {ProductService } from '../product-list/product.service';
@Component({
  // selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  product:Iproducts; 
   
  gettingProduct(tr)
  {
   this.product=tr;
   console.log(this.product)
  }
  ngOnInit(): void {
    
  }

}
