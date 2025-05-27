import { Directive, ElementRef } from '@angular/core';
import { ConfrimationModalService } from './confirmation-modal/confirmation-modal.service';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor(private el: ElementRef, private modalService: ConfrimationModalService) {}

  async onConfirmLeavePage(event: MouseEvent) {
    event.preventDefault();
    const href = this.el.nativeElement.href;

    
    const wantsToLeave = await this.modalService.show(
      'Do you want to leave the app?'
    );

    if (wantsToLeave) {
      window.location.href = href;
    }
  }
}
