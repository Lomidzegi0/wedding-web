import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invite-form',
  imports: [ReactiveFormsModule],
  templateUrl: './invite-form.html',
  styleUrl: './invite-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteForm {

}
