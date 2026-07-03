import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertService } from './services/alert-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public alertService = inject(AlertService)
}