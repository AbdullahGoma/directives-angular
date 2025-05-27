import { Component, ViewChild } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ConfrimationModalService } from '../confirmation-modal/confirmation-modal.service';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirective, ConfirmationModalComponent, LogDirective],
})
export class LearningResourcesComponent {
  @ViewChild('modal') modal!: ConfirmationModalComponent;

  constructor(private modalService: ConfrimationModalService) {}

  ngAfterViewInit() {
    this.modalService.registerModal(this.modal);
  }
}
