import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeStartComponent } from './node-start.component';

describe('NodeStartComponent', () => {
  let component: NodeStartComponent;
  let fixture: ComponentFixture<NodeStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
