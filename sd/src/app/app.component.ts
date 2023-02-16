import { Component } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Hicker } from './models';
import { HickerService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sd';

  hickers$ = this.hickerService.hickers$;
  displayedElements = {
    name: true,
    dateOfBirth: true,
    country: true,
    city: true,
    avatar: true,
    actions: true,
    actionsFull: true,
  };

  constructor(private hickerService: HickerService) {}

  faEllipsisVertical = faEllipsisVertical;

  updateHicker(id: number, hicker: Hicker) {
    this.hickerService.updateHicker(id, hicker).subscribe();
  }

  deleteHicker(id: string) {
    this.hickerService.deleteHicker(id).subscribe();
  }

  handleDisplayedElements() {}
}
