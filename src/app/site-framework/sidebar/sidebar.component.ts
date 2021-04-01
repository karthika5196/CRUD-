import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 categoryList:Category;
  constructor(private productsservice:ProductsService) { }

  ngOnInit(): void {
    this.productsservice.getcategory().subscribe(data=>{
      this.categoryList=data;
      console.log(this.categoryList);
    });
  }

}
