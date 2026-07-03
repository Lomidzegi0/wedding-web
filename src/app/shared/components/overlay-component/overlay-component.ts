import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface OverlayData {
  title: string;
  time: string;
  subtitle: string;
  description: string;
  mapImageUrl: string;
  googleMapsUrl: string;
  buttonText?: string;
}

@Component({
  selector: 'app-overlay-component',
  imports: [],
  templateUrl: './overlay-component.html',
  styleUrl: './overlay-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent {
  protected dialogRef = inject(MatDialogRef<OverlayComponent>);
  private sanitizer = inject(DomSanitizer);
  public data = inject<OverlayData>(MAT_DIALOG_DATA);

  public close(): void {
    this.dialogRef.close();
  }

  public getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}