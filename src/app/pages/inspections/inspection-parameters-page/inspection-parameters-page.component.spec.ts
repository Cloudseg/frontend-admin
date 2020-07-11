import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionParametersPageComponent } from './inspection-parameters-page.component';

describe('InspectionParametersPageComponent', () => {
  let component: InspectionParametersPageComponent;
  let fixture: ComponentFixture<InspectionParametersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionParametersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionParametersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
