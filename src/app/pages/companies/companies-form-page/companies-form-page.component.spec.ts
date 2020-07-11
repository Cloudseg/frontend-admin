import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesFormPageComponent } from './companies-form-page.component';

describe('CompaniesFormPageComponent', () => {
  let component: CompaniesFormPageComponent;
  let fixture: ComponentFixture<CompaniesFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
