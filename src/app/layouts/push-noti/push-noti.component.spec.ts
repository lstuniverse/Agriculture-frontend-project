import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotiComponent } from './push-noti.component';

describe('PushNotiComponent', () => {
  let component: PushNotiComponent;
  let fixture: ComponentFixture<PushNotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
