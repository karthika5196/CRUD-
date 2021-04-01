import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productid = 0;
  constructor(private activatedroute: ActivatedRoute,
    private service: ProductsService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data => {
      this.productid = data.id;

      this.service.deleteproduct(this.productid).subscribe(data=>{
        console.log("product deleted");
      });
    })
  }

}
