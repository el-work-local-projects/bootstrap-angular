import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonlessModalComponent } from './buttonless-modal.component';

describe('ButtonlessModalComponent', () => {
  let component: ButtonlessModalComponent;
  let fixture: ComponentFixture<ButtonlessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonlessModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonlessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
