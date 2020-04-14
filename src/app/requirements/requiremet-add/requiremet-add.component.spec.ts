import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiremetAddComponent } from './requiremet-add.component';

describe('RequiremetAddComponent', () => {
  let component: RequiremetAddComponent;
  let fixture: ComponentFixture<RequiremetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiremetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiremetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
