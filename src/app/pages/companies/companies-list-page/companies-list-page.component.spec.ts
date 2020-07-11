import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesListPageComponent } from './companies-list-page.component';

describe('CompaniesListPageComponent', () => {
  let component: CompaniesListPageComponent;
  let fixture: ComponentFixture<CompaniesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
