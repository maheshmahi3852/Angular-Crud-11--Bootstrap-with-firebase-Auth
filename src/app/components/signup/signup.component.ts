import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  firebaseErrorMessage: any;


  constructor(private authService: AuthService, 
    private router: Router, private afAuth: AngularFireAuth,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUppForm();
  }

  signUppForm(){
    this.signupForm = this.fb.group({
      email: [ '', (Validators.required)],
      password: [ '' , (Validators.required)]

    });
  }

  signUpData() {
    this.authService.signUpUser(this.signupForm.value.email, this.signupForm.value.password);
}




}
