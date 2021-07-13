import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { ApiService } from 'src/app/services/api.service';
import { Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: any;

  constructor(public api: ApiService, public auth2: AuthService) { }

  ngOnInit(): void {
    this.getFullData();
  }

  getFullData() {
    this.api.getAll().subscribe(data => {
      this.students = data
    })
  }

  deleteUser(id) {
    this.api.deleteStudent(id).subscribe(res => {


      setTimeout(() => {
        this.getFullData();
      }, 4000);


    });
  }


  search(event) {
    this.api.formData.studentname = event;
  }

}// end
