import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirestoreService } from '../../../services/firestore.service';
import { Guest } from '../../../shared/interfaces/guest.interface';
import { AlertService } from '../../../services/alert-service';

@Component({
  selector: 'app-invite-form',
  imports: [ReactiveFormsModule],
  templateUrl: './invite-form.html',
  styleUrl: './invite-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InviteForm {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly fireStore = inject(FirestoreService);
  private readonly alertService = inject(AlertService);

  readonly rsvpForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{4,20}$/)]],
    attendance: [null, [Validators.required]],
  });

  public onSubmit(): void {
    if (this.rsvpForm.valid) {
      const rawForm = this.rsvpForm.getRawValue();
      const newGuest = {
        name: `${rawForm.firstName} ${rawForm.lastName}`.trim(),
        mobileNumber: rawForm.phoneNumber,
        attending: rawForm.attendance,
      };

      this.fireStore
        .addGuest(newGuest)
        .then(() => {
          this.alertService.showSuccess('თქვენი მოწვევა წარმატებით დადასტურდა!');
          this.rsvpForm.reset({ attendance: null });
        })
        .catch((error) => {
          console.error(error);
          this.alertService.showError('გაგზავნისას დაფიქსირდა შეცდომა, გთხოვთ სცადოთ მოგვიანებით.');
        });
    } else {
      this.alertService.showError('გთხოვთ შეავსოთ ყველა სავალდებულო ველი.');
      this.rsvpForm.markAllAsTouched();
    }
  }
}
