import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../services/alert-service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-component.html',
  styleUrl: './alert-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  private readonly alertService = inject(AlertService);
  readonly alert = this.alertService.currentAlert;

  public close(): void {
    this.alertService.clear();
  }
}