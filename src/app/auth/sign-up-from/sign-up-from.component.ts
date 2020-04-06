import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up-from',
  templateUrl: './sign-up-from.component.html',
  styleUrls: ['./sign-up-from.component.sass']
})
export class SignUpFromComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.addNewAccount(this.profileForm.value);
  }

}
