import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FirestoreService } from '../../../services/firestore.service';
import { Guest } from '../../../shared/interfaces/guest.interface';
@Component({
  selector: 'app-guest-list',
  imports: [],
  templateUrl: './guest-list.html',
  styleUrl: './guest-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestList {
  private readonly firestoreService = inject(FirestoreService);

  // Live list of guests, updates automatically whenever Firestore changes
  readonly guests = toSignal(this.firestoreService.getGuests(), {
    initialValue: [] as Guest[],
  });

  readonly totalGuests = computed(() => this.guests().length);

  readonly attendingGuests = computed(
    () => this.guests().filter((g) => g.attending).length
  );

  readonly notAttendingGuests = computed(
    () => this.totalGuests() - this.attendingGuests()
  );
}