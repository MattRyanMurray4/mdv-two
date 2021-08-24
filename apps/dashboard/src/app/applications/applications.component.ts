import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Application, emptyApplication } from '@projects/api-interfaces';
import { ApplicationsFacade } from '@projects/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'projects-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  form: FormGroup;
  applications$: Observable<Application[]> =
    this.applicationsFacade.allApplications$;
  selectedApplication: Observable<Application>;

  constructor(
    private applicationsFacade: ApplicationsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.applicationsFacade.loadApplications();
    this.reset();
  }

  selectApplication(application: Application) {
    this.applicationsFacade.selectApplication(application.id);
    this.form.patchValue(application);
  }

  reset() {
    this.selectApplication(emptyApplication);
    this.form.reset();
  }

  createApplication(application: Application) {
    this.applicationsFacade.createApplication(application);
    this.reset();
  }

  updateApplication(application: Application) {
    this.applicationsFacade.updateApplication(application);
    this.reset();
  }

  saveApplication(application: Application) {
    application.id
      ? this.applicationsFacade.updateApplication(application)
      : this.applicationsFacade.createApplication(application);
  }

  deleteApplication(application: Application) {
    this.applicationsFacade.deleteApplication(application);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      description: ['', Validators.required],
      contributors: ['', Validators.required],
      percentComplete: [''],
    });
  }
}
