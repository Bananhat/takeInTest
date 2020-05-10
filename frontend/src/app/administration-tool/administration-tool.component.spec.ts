import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationToolComponent } from './administration-tool.component';

describe('AdministrationToolComponent', () => {
  let component: AdministrationToolComponent;
  let fixture: ComponentFixture<AdministrationToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
