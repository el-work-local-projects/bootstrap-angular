import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedModalComponent } from './sized-modal.component';

describe('SizedModalComponent', () => {
  let component: SizedModalComponent;
  let fixture: ComponentFixture<SizedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
