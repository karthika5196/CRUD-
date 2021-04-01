import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-product-by-date',
  templateUrl: './view-all-product-by-date.component.html',
  styleUrls: ['./view-all-product-by-date.component.css']
})
export class ViewAllProductByDateComponent implements OnInit {
  searchdate:" ";
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data=>{
      this.searchdate=data.date;
     } )
  }
}
