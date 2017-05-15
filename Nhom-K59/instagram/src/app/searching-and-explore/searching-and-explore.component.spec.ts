import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingAndExploreComponent } from './searching-and-explore.component';

describe('SearchingAndExploreComponent', () => {
  let component: SearchingAndExploreComponent;
  let fixture: ComponentFixture<SearchingAndExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingAndExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingAndExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
