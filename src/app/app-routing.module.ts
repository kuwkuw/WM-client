import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpFromComponent } from './auth/sign-up-from/sign-up-from.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { title: 'Auth' }
  },
  {
    path: 'words',
    loadChildren: () => import('./words/words.module').then(m => m.WordsModule),
    data: { title: 'Words' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
