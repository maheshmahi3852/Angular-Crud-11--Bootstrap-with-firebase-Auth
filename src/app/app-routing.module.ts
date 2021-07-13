import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { SecureGuard } from './guards/secure.guard';
import { AddDataComponent } from './pages/add-data/add-data.component';
import { EidtDataComponent } from './pages/eidt-data/eidt-data.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ViewDataComponent } from './pages/view-data/view-data.component';

const routes: Routes = [
  {
    path:'',redirectTo:"/signin", pathMatch:"full"
  },
  {
   path:'signin',component : SigninComponent,canActivate: [AuthGuard] 
  },
  {
    path:'signup',component : SignupComponent
   },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'add',component:AddDataComponent,canActivate: [SecureGuard] 
  },
  {
    path:'view/:id',component:ViewDataComponent ,canActivate: [SecureGuard] 
  },
  {
    path:'eidt/:id',component:EidtDataComponent ,canActivate: [SecureGuard] 
  },
  
   { path: '**', component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
