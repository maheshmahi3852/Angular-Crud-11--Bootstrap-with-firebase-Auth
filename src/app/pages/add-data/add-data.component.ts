import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/model/student';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  isValid = true;
  constructor(public api: ApiService, public router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.api.formData = {
      id: null,
      studentname: '',
      branch: '',
      percentage: '',
      birth: '',
      joining: '',
      qualify: ''
    };
  }

  insertRecord(form: NgForm) {

    this.api.addData(form.value).subscribe(
      (res) => {
    
        this.router.navigate(['/home']);
        this.resetForm(form);
      },
      (_error) => {
        alert('something wrong');
      }
    );
  }


  //submit data
  onSubmit(form: NgForm) {
      this.insertRecord(form);
  }





} //end