import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedModalComponent } from './validated-modal.component';

describe('ValidatedModalComponent', () => {
  let component: ValidatedModalComponent;
  let fixture: ComponentFixture<ValidatedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
