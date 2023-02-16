import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  faEllipsisVertical,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hicker-actions',
  templateUrl: './hicker-actions.component.html',
  styleUrls: ['./hicker-actions.component.scss'],
})
export class HickerActionsComponent implements OnInit {
  faEllipsisVertical = faEllipsisVertical;
  faTrashCan = faTrashCan;
  faPen = faPen;

  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  isOpen = false;

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  constructor(private renderer: Renderer2) {
    renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.toggleButton.nativeElement &&
        e.target !== this.menu.nativeElement
      ) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
