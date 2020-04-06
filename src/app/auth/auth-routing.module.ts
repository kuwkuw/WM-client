import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpFromComponent } from './sign-up-from/sign-up-from.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', component: SignUpFromComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  static components = [SignUpFromComponent, LoginFormComponent];
}
