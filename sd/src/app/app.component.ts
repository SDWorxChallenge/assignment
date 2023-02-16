import { Component } from '@angular/core';
import { Hicker } from './models';
import { HickerService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sd';

  hickers$ = this.hickerService.getHickers();

  constructor(private hickerService: HickerService) {}

  updateHicker(id: number, hicker: Hicker) {
    this.hickerService.updateHicker(id, hicker).subscribe();
  }

  deleteHicker(id: number) {
    this.hickerService.deleteHicker(id).subscribe();
  }
}
