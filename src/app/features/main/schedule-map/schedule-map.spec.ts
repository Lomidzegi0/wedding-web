import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMap } from './schedule-map';

describe('ScheduleMap', () => {
  let component: ScheduleMap;
  let fixture: ComponentFixture<ScheduleMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
