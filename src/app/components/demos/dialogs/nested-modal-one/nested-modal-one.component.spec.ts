import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedModalOneComponent } from './nested-modal-one.component';

describe('NestedModalOneComponent', () => {
  let component: NestedModalOneComponent;
  let fixture: ComponentFixture<NestedModalOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedModalOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedModalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
