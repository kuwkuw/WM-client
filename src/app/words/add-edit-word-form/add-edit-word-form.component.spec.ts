import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWordFormComponent } from './add-edit-word-form.component';

describe('AddEditWordFormComponent', () => {
  let component: AddEditWordFormComponent;
  let fixture: ComponentFixture<AddEditWordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditWordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
