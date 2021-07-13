import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-eidt-data',
  templateUrl: './eidt-data.component.html',
  styleUrls: ['./eidt-data.component.css']
})
export class EidtDataComponent implements OnInit {
  id: any;
  formData: any;

  constructor(private api: ApiService, public activateRoute: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.id = data.id;
    });
    this.api.getDataById(this.id).subscribe(data => {
      this.formData = data;
    })
  }


  updateProduct(form): void {
    this.api.updateData(this.formData.id, this.formData)
      .subscribe(
        response => {
          console.log(response);
        this.route.navigate(['/home'])
        },
        error => {
          console.log(error);
        });
  }



}
