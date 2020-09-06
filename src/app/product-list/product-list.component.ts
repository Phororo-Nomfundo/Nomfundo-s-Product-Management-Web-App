import { Component, OnInit } from '@angular/core';
import{ProductDetailsComponent} from '../product-details/product-details.component';
import{Iproducts}from './product';
import { MatDialog } from '@angular/material/dialog';
import{MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import{MatInput} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule, MatIcon} from '@angular/material/icon';
import {ProductService } from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 showImage: boolean = false;
 products:Iproducts[];
 errorMessage: string;  
 info:string;



 dataSource;
 displayedColumns: string[] = ['ShowImage','productName', 'productCode', 'price', 'starRating'];
  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


 
    toggleImage():void{
      this.showImage = !this.showImage;
    }

 constructor(public dialog:MatDialog,private productService: ProductService){};
 
openDialog(tablerow):void{
  this.dialog.open(ProductDetailsComponent,{  height: '600px',width:'700px'});
  
  // this.info=(event.target as HTMLTableDataCellElement).nodeValue;

  let ProductDetails= new ProductDetailsComponent();
  ProductDetails.gettingProduct(tablerow)

}
    
  ngOnInit(): void {
  
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      
     this.dataSource = new MatTableDataSource(this.products);
      },
      error: err => this.errorMessage = err
    });
    

  }

}
