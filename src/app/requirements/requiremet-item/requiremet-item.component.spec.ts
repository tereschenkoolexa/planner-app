import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiremetItemComponent } from './requiremet-item.component';

describe('RequiremetItemComponent', () => {
  let component: RequiremetItemComponent;
  let fixture: ComponentFixture<RequiremetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiremetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiremetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
