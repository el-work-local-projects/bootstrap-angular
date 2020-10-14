import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMessageModalComponent } from './frame-message-modal.component';

describe('FrameMessageModalComponent', () => {
  let component: FrameMessageModalComponent;
  let fixture: ComponentFixture<FrameMessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameMessageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
