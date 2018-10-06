import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md5GenerateComponent } from './md5-generate.component';

describe('Md5GenerateComponent', () => {
  let component: Md5GenerateComponent;
  let fixture: ComponentFixture<Md5GenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md5GenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md5GenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
