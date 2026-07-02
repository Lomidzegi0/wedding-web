import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCounter } from './date-counter';

describe('DateCounter', () => {
  let component: DateCounter;
  let fixture: ComponentFixture<DateCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
