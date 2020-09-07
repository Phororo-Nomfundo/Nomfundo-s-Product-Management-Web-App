import { Component, OnInit, Inject } from '@angular/core';
import{Iproducts} from '../product-list/product';
import{MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ProductService } from '../product-list/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  // selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Iproducts) { }

  product:Iproducts; 
 
  ngOnInit(): void {
    console.log(this.data);
  }

}
