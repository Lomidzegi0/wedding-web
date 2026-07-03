import { Injectable, signal } from '@angular/core';

export type AlertType = 'success' | 'error';

export interface AlertState {
  message: string;
  type: AlertType;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public readonly alertState = signal<AlertState>({
    message: '',
    type: 'success',
    visible: false
  });
  
  readonly currentAlert = this.alertState.asReadonly();
  private timeoutId: any;

  public showSuccess(message: string, durationMs = 4000): void {
    this.showAlert(message, 'success', durationMs);
  }

  public showError(message: string, durationMs = 5000): void {
    this.showAlert(message, 'error', durationMs);
  }

  public clear(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.alertState.set({ message: '', type: 'success', visible: false });
  }

  private showAlert(message: string, type: AlertType, durationMs: number): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);

    this.alertState.set({ message, type, visible: true });

    this.timeoutId = setTimeout(() => {
      this.clear();
    }, durationMs);
  }
}