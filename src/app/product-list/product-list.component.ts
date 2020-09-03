import { Component, OnInit } from '@angular/core';
import{ProductDetailsComponent} from '../product-details/product-details.component';
import{Iproducts}from './product';
import { MatDialog } from '@angular/material/dialog';
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
 value:string='search';
 private _listFilter: string;

 get listFilter(): string{
   return this._listFilter;
 }
 
 set listFilter(value:string){
   
   this._listFilter=value;

   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
 }

 filteredProducts: Iproducts[];
 performFilter(filterBy:string):Iproducts[]{

  filterBy = filterBy.toLocaleLowerCase();
  
  return this.products.filter((product:Iproducts) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

    toggleImage():void{
      this.showImage = !this.showImage;
    }

 constructor(public dialog:MatDialog,private productService: ProductService){};
openDialog():void{
  this.dialog.open(ProductDetailsComponent,{  height: '600px',width:'700px'});
}
    
  ngOnInit(): void {
  
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

}
