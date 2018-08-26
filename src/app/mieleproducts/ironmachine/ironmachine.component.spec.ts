import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronmachineComponent } from './ironmachine.component';

describe('IronmachineComponent', () => {
  let component: IronmachineComponent;
  let fixture: ComponentFixture<IronmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
