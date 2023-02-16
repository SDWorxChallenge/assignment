import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { IAttendee } from './model/attendees.vo';
import { AttendeesStore } from './store/attendees.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    AttendeesStore
  ]
})
export class AppComponent {
  tableForm!: FormGroup;

  readonly vm$ = this.store.vm$.pipe(

  );

  constructor(private store: AttendeesStore) {
    this.store.getAttendees();
  }

}
