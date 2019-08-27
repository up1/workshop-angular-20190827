import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show2Component } from './show2.component';

describe('Show2Component', () => {
  let component: Show2Component;
  let fixture: ComponentFixture<Show2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
