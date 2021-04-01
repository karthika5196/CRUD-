import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
 products:Product;
  constructor(private productsservice:ProductsService) { }

  ngOnInit(): void {
    this.productsservice.getallproducts().subscribe(data=>{
      this.products=data;
    })
      }

}
