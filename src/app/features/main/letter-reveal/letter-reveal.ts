import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  OnDestroy,
  inject,
  signal,
  output,
} from '@angular/core';

@Component({
  selector: 'app-letter-reveal',
  imports: [],
  templateUrl: './letter-reveal.html',
  styleUrl: './letter-reveal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LetterReveal implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly timers: ReturnType<typeof setTimeout>[] = [];

  readonly opened = signal(false);
  readonly sceneHidden = signal(false);

  /** Fires once the envelope photo has zoomed out and the scene has faded,
   *  so the parent can mount the main site underneath it. */
  readonly envelopeOpened = output<void>();

  constructor() {
    // Mirrors the original body{ overflow:hidden } until the letter opens,
    // but scoped so it only blocks scroll while this component is alive.
    this.document.body.classList.add('letter-reveal-locked');
  }

  ngOnDestroy(): void {
    this.timers.forEach((t) => clearTimeout(t));
    this.document.body.classList.remove('letter-reveal-locked', 'letter-reveal-unsealed');
  }

  openLetter(): void {
    if (this.opened()) return;
    this.opened.set(true);

    // The photo zooms in and fades over 0.5s (see .envelope-photo.zoom in
    // the stylesheet), then the whole scene fades out shortly after.
    this.timers.push(
      setTimeout(() => {
        this.sceneHidden.set(true);
        this.document.body.classList.remove('letter-reveal-locked');
        this.document.body.classList.add('letter-reveal-unsealed');
      }, 550)
    );

    this.timers.push(
      setTimeout(() => {
        this.envelopeOpened.emit();
      }, 1050)
    );
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openLetter();
    }
  }
}
