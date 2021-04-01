import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
// import {Product} from './product';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
searchcategory:any=" ";
productlist:any;
  constructor(
    private activatedroute:ActivatedRoute,
    private service:ProductsService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      console.log(data);
      this.searchcategory=data.id;
      console.log(this.searchcategory);
     
     this.service.searchcategoryproduct(this.searchcategory).subscribe(data=>{
       console.log(data);
       this.productlist=data;
     })
    });
  }

}
