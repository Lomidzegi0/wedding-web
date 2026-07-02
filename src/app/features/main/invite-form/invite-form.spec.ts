import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteForm } from './invite-form';

describe('InviteForm', () => {
  let component: InviteForm;
  let fixture: ComponentFixture<InviteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
