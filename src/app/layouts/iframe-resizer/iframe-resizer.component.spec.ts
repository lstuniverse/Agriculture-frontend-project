import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeResizerComponent } from './iframe-resizer.component';

describe('IframeResizerComponent', () => {
  let component: IframeResizerComponent;
  let fixture: ComponentFixture<IframeResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
