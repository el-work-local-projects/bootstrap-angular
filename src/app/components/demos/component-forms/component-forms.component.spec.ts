import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormsComponent } from './component-forms.component';

describe('ComponentFormsComponent', () => {
  let component: ComponentFormsComponent;
  let fixture: ComponentFixture<ComponentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
