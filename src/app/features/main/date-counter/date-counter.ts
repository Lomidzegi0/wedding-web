import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { timer, map } from 'rxjs';
import { finalDate } from '../../../shared/consts/date.constants';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

@Component({
  selector: 'app-date-counter',
  imports: [],
  templateUrl: './date-counter.html',
  styleUrl: './date-counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateCounter {
  public title = input<string>("ქორწილამდე დარჩა");
  public targetDate = input<Date>(finalDate);

  private countdown$ = timer(0, 1000).pipe(
    map(() => {
      const now = new Date().getTime();
      const target = this.targetDate().getTime();
      const distance = target - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        isExpired: false
      };
    })
  );

  public countdown = toSignal(this.countdown$, {
    initialValue: { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false }
  });
}