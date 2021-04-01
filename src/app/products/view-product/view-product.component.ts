import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productid = 0;
  productdetails:Product;
  constructor(
    private activatedroute: ActivatedRoute,
    private service:ProductsService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data => {
      this.productid = data.id;
      this.service.viewproduct(this.productid).subscribe(productdata=>{
        this.productdetails=productdata;
        console.log(this.productdetails);

      })

    })
  }

}
