import { Injectable } from '@angular/core';
import { ConfirmationModalComponent } from './confirmation-modal.component';

@Injectable({ providedIn: 'root' })
export class ConfrimationModalService {
  private modal?: ConfirmationModalComponent;

  registerModal(modal: ConfirmationModalComponent) {
    this.modal = modal;
  }

  show(message: string): Promise<boolean> {
    if (!this.modal) {
      throw new Error('Modal not registered');
    }
    return this.modal.show(message);
  }
}
