import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverListComponent } from './add-driver-list.component';

describe('AddDriverListComponent', () => {
  let component: AddDriverListComponent;
  let fixture: ComponentFixture<AddDriverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDriverListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
