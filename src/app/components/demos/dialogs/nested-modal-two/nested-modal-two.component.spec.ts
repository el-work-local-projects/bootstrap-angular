import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedModalTwoComponent } from './nested-modal-two.component';

describe('NestedModalTwoComponent', () => {
  let component: NestedModalTwoComponent;
  let fixture: ComponentFixture<NestedModalTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedModalTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedModalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
