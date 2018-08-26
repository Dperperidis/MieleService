import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrymachineComponent } from './drymachine.component';

describe('DrymachineComponent', () => {
  let component: DrymachineComponent;
  let fixture: ComponentFixture<DrymachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrymachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrymachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
