import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder,
    private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: [ '', (Validators.required)],
      password: [ '' , (Validators.required)]

    });
  }

  loginUser() {
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password);
}

}
