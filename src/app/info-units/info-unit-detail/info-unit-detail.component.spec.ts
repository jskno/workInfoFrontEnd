import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUnitDetailComponent } from './info-unit-detail.component';

describe('InfoUnitDetailComponent', () => {
  let component: InfoUnitDetailComponent;
  let fixture: ComponentFixture<InfoUnitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUnitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
