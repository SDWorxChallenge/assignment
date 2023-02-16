import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IAttendee } from '../model/attendees.vo';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttendeeComponent {

  @Input() set attendee(a: IAttendee) {
    this.form.patchValue({
      ...a
    });
  };

  @Input() editable = false;

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    city: new FormControl(),
    country: new FormControl()
  });
}
