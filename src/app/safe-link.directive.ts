import { Directive, ElementRef, input } from '@angular/core';
import { ConfrimationModalService } from './confirmation-modal/confirmation-modal.service';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  quaryParam = input('myapp', { alias: 'appSafeLink' });
  constructor(
    private el: ElementRef,
    private modalService: ConfrimationModalService
  ) {}

  async onConfirmLeavePage(event: MouseEvent) {
    event.preventDefault();
    const anchor = event.target as HTMLAnchorElement;
    const originalHref = this.el.nativeElement.href;

    const wantsToLeave = await this.modalService.show(
      'Do you want to leave the app?'
    );

    if (wantsToLeave) {
      const trackingUrl = new URL(originalHref);
      trackingUrl.searchParams.set('from', this.quaryParam());

      window.location.href = trackingUrl.toString();
    }
  }
}
