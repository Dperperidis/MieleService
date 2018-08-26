import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumComponent } from './vacuum.component';

describe('VacuumComponent', () => {
  let component: VacuumComponent;
  let fixture: ComponentFixture<VacuumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacuumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacuumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
