import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditWordFormComponent } from './add-edit-word-form/add-edit-word-form.component';
import { WordsListComponent } from './words-list/words-list.component';

const routes: Routes = [
  { path: 'add', component: AddEditWordFormComponent },
  { path: 'edit', component: AddEditWordFormComponent },
  { path: 'list', component: WordsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule {
  static components = [AddEditWordFormComponent, WordsListComponent];
}
