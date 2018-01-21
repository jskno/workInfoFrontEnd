import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUnitItemComponent } from './info-unit-item.component';

describe('InfoUnitItemComponent', () => {
  let component: InfoUnitItemComponent;
  let fixture: ComponentFixture<InfoUnitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUnitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUnitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
