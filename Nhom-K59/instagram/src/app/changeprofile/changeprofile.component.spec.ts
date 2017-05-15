import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeprofileComponent } from './changeprofile.component';

describe('ChangeprofileComponent', () => {
  let component: ChangeprofileComponent;
  let fixture: ComponentFixture<ChangeprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
