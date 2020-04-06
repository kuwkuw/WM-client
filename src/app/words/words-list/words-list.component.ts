import { Component, OnInit } from '@angular/core';

import { WordsService } from '../words.service';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.sass']
})
export class WordsListComponent implements OnInit {
  words = [];

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    this.wordsService.getWordsList();
  }

}
