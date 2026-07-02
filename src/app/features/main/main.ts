import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-main',
  imports: [Hero],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Main {

}
