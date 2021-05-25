import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './feature/login/login.component';
import {SignUpComponent} from './feature/sign-up/sign-up.component';


const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignUpComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
