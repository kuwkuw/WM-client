import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WordsRoutingModule } from './words-routing.module';
import { WordsService } from './words.service';
import { TrainingComponent } from './training/training.component';


@NgModule({
  declarations: [...WordsRoutingModule.components, TrainingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WordsRoutingModule
  ],
  providers: [
    WordsService
  ]
})
export class WordsModule { }
