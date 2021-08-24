import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Application } from '@projects/api-interfaces';

@Component({
  selector: 'projects-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
})
export class ApplicationDetailsComponent {
  currentApplication: Application;
  originalName: string;

  // @Input() set application(value: Application | null) {
  //   if (value) this.originalName = value.name;
  //   this.currentApplication = Object.assign({}, value);
  // }

  @Input() set application(value: Application | null) {
    if (value) this.originalName = value.name;
    this.currentApplication = Object.assign({}, value);
  }
  @Input() form: FormGroup;
  @Output()
  saved = new EventEmitter();

  @Output() cancelled = new EventEmitter();

  save(application: Application) {
    this.saved.emit(application);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
