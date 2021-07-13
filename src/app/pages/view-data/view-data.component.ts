import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  id: any;
  productData: any;

  constructor(public api:ApiService,public activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.id = data.id;
    });
    this.viewData();
  }

viewData(){
  this.api.getDataById(this.id).subscribe(data => {
    console.log(data)
    this.productData = data;
  })
}


}
