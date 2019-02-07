import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpagePage } from './newpage.page';

describe('NewpagePage', () => {
  let component: NewpagePage;
  let fixture: ComponentFixture<NewpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
