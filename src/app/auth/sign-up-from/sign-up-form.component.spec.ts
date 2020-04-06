import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFromComponent } from './sign-up-from.component';

describe('SignUpFromComponent', () => {
  let component: SignUpFromComponent;
  let fixture: ComponentFixture<SignUpFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
