import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { DateCounter } from './date-counter/date-counter';
import { ScheduleMap } from './schedule-map/schedule-map';
import { InviteForm } from './invite-form/invite-form';
import { AlertService } from '../../services/alert-service';

@Component({
  selector: 'app-main',
  imports: [Hero, DateCounter,ScheduleMap, InviteForm],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Main {
  
}
