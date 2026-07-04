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
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.6363286285787!2d44.540078099999995!3d41.4254125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4043e9798e26084d%3A0x420d775d921a4505!2sSaint%20Peter%20and%20Paul%20monastery!5e0!3m2!1sen!2sge!4v1783104657382!5m2!1sen!2sge" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
      googleMapsUrl:
        'https://www.google.com/maps/place/Saint+Peter+and+Paul+monastery/@41.4254125,44.5400781,17z/data=!3m1!4b1!4m6!3m5!1s0x4043e9798e26084d:0x420d775d921a4505!8m2!3d41.4254125!4d44.5400781!16s%2Fg%2F11r74shm8b!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
    },
    2: {
      title: 'მიღება',
      time: '18:00',
      subtitle: 'Lost Hut (დაკარგული ქოხი)',
      description: 'ოქროყანის მხარე · მთაწმინდის ფერდობი',
      mapImageUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.5265050132443!2d44.7388441!3d41.687568399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d449c2581fb%3A0x5e12403d353d84b6!2sLost%20Hut!5e0!3m2!1sen!2sge!4v1783104839531!5m2!1sen!2sge" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
      googleMapsUrl:
        'https://www.google.com/maps/place/Lost+Hut/@41.6875684,44.7388441,17z/data=!3m1!4b1!4m6!3m5!1s0x40440d449c2581fb:0x5e12403d353d84b6!8m2!3d41.6875684!4d44.7388441!16s%2Fg%2F11h53qgyds!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
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
