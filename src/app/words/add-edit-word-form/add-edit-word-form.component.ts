import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { WordsService } from '../words.service';

@Component({
  selector: 'app-add-edit-word-form',
  templateUrl: './add-edit-word-form.component.html',
  styleUrls: ['./add-edit-word-form.component.sass']
})
export class AddEditWordFormComponent implements OnInit {

  wordForm = new FormGroup({
    original: new FormControl(''),
    translation: new FormControl(''),
  });


  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {}

}
