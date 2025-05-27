import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  imports: [NgIf]
})
export class ConfirmationModalComponent {
  isVisible = false;
  message = '';
  private resolveFn: (value: boolean) => void = () => {};

  show(message: string): Promise<boolean> {
    this.message = message;
    this.isVisible = true;

    return new Promise((resolve) => {
      this.resolveFn = resolve;
    });
  }

  onConfirm() {
    this.resolveFn(true);
    this.isVisible = false;
  }

  onCancel() {
    this.resolveFn(false);
    this.isVisible = false;
  }
}
