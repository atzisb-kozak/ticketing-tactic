import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const app_routes: Routes = [
	{
		path:'login',
		component: LoginComponent
	},
	{
		path:'register',
		component: RegisterComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
