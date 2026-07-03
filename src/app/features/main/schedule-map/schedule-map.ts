import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  OverlayComponent,
  OverlayData,
} from '../../../shared/components/overlay-component/overlay-component';

@Component({
  selector: 'app-schedule-map',
  imports: [],
  templateUrl: './schedule-map.html',
  styleUrl: './schedule-map.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleMap {
  private readonly dialog = inject(MatDialog);

  private readonly scheduleDataMap: Record<number, OverlayData> = {
    1: {
      title: 'ჯვრისწერა',
      time: '15:00',
      subtitle: 'ბოლნისის ელიას მთის მონასტერი',
      description:
        'მდებარეობს ბოლნისის ცენტრიდან დაახლოებით 4 კმ-ში, ბოლნისის სიონისკენ მიმავალ გზაზე.',
      mapImageUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.70817441586!2d44.56012357656254!3d41.53538467128148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40416b2ef3a651f1%3A0x6b1db9a2884fb1e6!2sSt.%20Elijah%20Monastery%20on%20Mount%20Elia!5e0!3m2!1sen!2sge!4v1720000000000!5m2!1sen!2sge',
      googleMapsUrl:
        'https://maps.google.com/?q=St.+Elijah+Monastery+on+Mount+Elia,+Bolnisi&ftid=0x40416b2ef3a651f1:0x6b1db9a2884fb1e6',
    },
    2: {
      title: 'მიღება',
      time: '18:00',
      subtitle: 'Lost Hut (დაკარგული ქოხი)',
      description: 'ოქროყანის მხარე · მთაწმინდის ფერდობი',
      mapImageUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.670570381665!2d44.74571107658742!3d41.68443597126343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40410dd49c2581f3%3A0x5e12403d353d84b6!2sLost%20Hut!5e0!3m2!1sen!2sge!4v1720000000000!5m2!1sen!2sge',
      googleMapsUrl:
        'https://maps.google.com/?q=Lost+Hut,+Tbilisi&ftid=0x40410dd49c2581f3:0x5e12403d353d84b6',
    },
  };
  public handleScheduleClick(number: number): void {
    const data = this.scheduleDataMap[number];
    if (!data) return;

    this.dialog.open(OverlayComponent, {
      data,
      width: '100%',
      maxWidth: '450px',
      panelClass: 'custom-dialog-container',
    });
  }
}
