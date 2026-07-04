import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Hero } from './hero/hero';
import { DateCounter } from './date-counter/date-counter';
import { ScheduleMap } from './schedule-map/schedule-map';
import { InviteForm } from './invite-form/invite-form';
import { LetterReveal } from "./letter-reveal/letter-reveal";

@Component({
  selector: 'app-main',
  imports: [Hero, DateCounter, ScheduleMap, InviteForm, LetterReveal],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Main {
  public getStarted = signal<boolean>(false)

}
