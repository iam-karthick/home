import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTouchComponent } from './get-touch.component';

describe('GetTouchComponent', () => {
  let component: GetTouchComponent;
  let fixture: ComponentFixture<GetTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
