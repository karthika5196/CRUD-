import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
 public file: File;
 public url: string;
 headers:Headers;
 productimage:any;
  constructor(private service:ProductsService,
    private http:HttpClient) {
      // console.log('file upload initialized');
      // this.headers=new Headers();
      // this.headers.set('content-Type','multipart/form-data');
      // this.url="http://localhost:3000/products";
     }

 
  NewProduct:Product;
  ngOnInit(): void {
    
  }
addnewproduct(form){
  console.log(form.value);
  let newProduct={
 
name:form.value.productname,    
id:12,
decription:form.value.productdescription,
price:form.value.productprice,
model:form.value.productmodel,
category_id:form.value.productcategoryid,
waranty:form.value.productwaranty,
image:form.value.productimage
  };
  this.service.createproduct(newProduct).subscribe(data=>{
console.log(data);
this.NewProduct=data;
  });
  // "id": 5,
  // "name": "Oppo",
  // "model": "F17Pro",
  // "category_id": 5,
  // "description": "project decription goes here",
  // "price": 18000,
  // "image": "http://localhost:4200/assets/image/5.jpeg",
  // "is available": true,
  // "rating": 4,
  // "reviews": 120,
  // "vendo_name": "Seller-1",
  // "waranty": 2
 
}
onSelect(event){
  console.log(this.productimage);
  // if(event.target.files.length>0){
  //   const file=event.target.files[0];
  //   this.createform.get('productimage')
  }

//   // console.log(input);
//   var reader = new FileReader();
//       reader.onload = (e: any) => {
//         //console.log('Got here: ', e.target.result);
//         this.obj.url = e.target.result;
//         this.url=e.target.result;//display purpose
//         console.log(this.url);
//       }
// }
}
