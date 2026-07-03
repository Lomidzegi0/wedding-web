import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterReveal } from './letter-reveal';

describe('LetterReveal', () => {
  let component: LetterReveal;
  let fixture: ComponentFixture<LetterReveal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterReveal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterReveal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
