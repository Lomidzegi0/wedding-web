import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  OnDestroy,
  inject,
  signal,
  output,
} from '@angular/core';

interface Crumb {
  dx: string;
  dy: string;
}

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
  readonly pressed = signal(false);
  readonly cracking = signal(false);
  readonly envelopeOpen = signal(false);
  readonly sceneHidden = signal(false);

  readonly crumbs = signal<Crumb[]>([]);

  /** Fires once the envelope has finished opening and faded out, so the
   *  parent can swap in the main site. */
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

    this.pressed.set(true);

    this.timers.push(
      setTimeout(() => {
        this.pressed.set(false);
        this.cracking.set(true);
        this.spawnCrumbs();
      }, 140)
    );

    this.timers.push(setTimeout(() => this.envelopeOpen.set(true), 420));

    this.timers.push(
      setTimeout(() => {
        this.sceneHidden.set(true);
        this.document.body.classList.remove('letter-reveal-locked');
        this.document.body.classList.add('letter-reveal-unsealed');
      }, 900)
    );

    // Scene fade-out is 0.9s with a 0.35s delay (see .scene.hide in the
    // stylesheet) starting once sceneHidden flips at 900ms, so the fade
    // visually finishes around 900 + 350 + 900 = 2150ms.
    this.timers.push(
      setTimeout(() => {
        this.envelopeOpened.emit();
      }, 2150)
    );
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openLetter();
    }
  }

  private spawnCrumbs(): void {
    const n = 10;
    const crumbs: Crumb[] = [];
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
      const dist = 40 + Math.random() * 40;
      crumbs.push({
        dx: `${Math.cos(angle) * dist}px`,
        dy: `${Math.sin(angle) * dist}px`,
      });
    }
    this.crumbs.set(crumbs);
  }
}