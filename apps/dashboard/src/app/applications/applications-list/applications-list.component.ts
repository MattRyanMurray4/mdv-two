import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '@projects/api-interfaces';

@Component({
  selector: 'projects-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss'],
})
export class ApplicationsListComponent {
  @Input() applications: Application[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
