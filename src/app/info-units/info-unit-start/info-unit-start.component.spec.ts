import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUnitStartComponent } from './info-unit-start.component';

describe('InfoUnitStartComponent', () => {
  let component: InfoUnitStartComponent;
  let fixture: ComponentFixture<InfoUnitStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUnitStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUnitStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
