import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDesignComponent } from './btn-design.component';

describe('BtnDesignComponent', () => {
  let component: BtnDesignComponent;
  let fixture: ComponentFixture<BtnDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
