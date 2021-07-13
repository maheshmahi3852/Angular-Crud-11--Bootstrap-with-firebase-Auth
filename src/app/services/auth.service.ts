import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private router: Router, private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userData = user;
        localStorage.setItem('user', this.userData.email);
      }
    });
  }

  loginUser(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigateByUrl('/home')
      }).catch((error) => {
        console.warn('User doesn not exist! Please Signup');
        alert("user is not registered")

      });
  }

  signUpUser(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/']);
        alert("user created successfully")
      }).catch((error) => {
        console.warn("alert")
      });
  }

// tslint:disable-next-line: typedef
logOut(){
  this.afAuth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  });
}
   isLoggeedIn(){
   const user = localStorage.getItem('user');
   return user ? true : false;
  }
  getUser(){
    const user = localStorage.getItem('user');
    return user ? user : null;
  }



} //end
