import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
