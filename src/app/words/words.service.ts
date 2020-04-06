import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private httpClient: HttpClient) { }

  getWordsList() {
    const sub = new Subscriber((data) => {
      console.log('getWordsList', data);
    });
    return this.httpClient.get('/api/words').subscribe(sub);
  }
}
