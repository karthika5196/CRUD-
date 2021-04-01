import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productid = 0;
  productdetails: Product;

  constructor(private activatedroute: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data => {
      this.productid = data.id;

      this.service.viewproduct(this.productid).subscribe(data => {
        this.productdetails = data;
      })
    });
  }
  updateProduct(form) {
    let updateproduct = {
      name: form.value.productname,
      id: 12,
      decription: form.value.productdescription,
      price: form.value.productprice,
      model: form.value.productmodel,
      category_id: form.value.productcategoryid,
      waranty: form.value.productwaranty,
      image: form.value.image
    };
    this.service.updateproduct(this.productid, updateproduct).subscribe(data => {
  alert("Product updated");
    })
  }

}
