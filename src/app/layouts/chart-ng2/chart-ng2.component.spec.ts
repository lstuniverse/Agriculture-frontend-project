import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNg2Component } from './chart-ng2.component';

describe('ChartNg2Component', () => {
  let component: ChartNg2Component;
  let fixture: ComponentFixture<ChartNg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartNg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
