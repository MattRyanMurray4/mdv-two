import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Application } from '@projects/api-interfaces';
import { ApplicationsService, NotifyService } from '@projects/core-data';
@Injectable({ providedIn: 'root' })
export class ApplicationsFacade {
  allApplications$: Observable<Application[]> = this.applicationsService.all();
  selectedApplication$: Observable<Application> = EMPTY;

  constructor(
    private applicationsService: ApplicationsService,
    private notify: NotifyService
  ) {}

  loadApplications() {
    this.allApplications$ = this.applicationsService.all();
  }

  selectApplication(applicationId: string) {
    return this.applicationsService.find(applicationId).subscribe(() => {
      this.selectedApplication$;
    });
  }

  createApplication(application: Application) {
    return this.applicationsService.create(application).subscribe(() => {
      this.loadApplications();
      this.notify.notification(`Created ${application.name} success.`);
    });
  }

  updateApplication(application: Application) {
    return this.applicationsService.update(application).subscribe(() => {
      this.loadApplications();
      this.notify.notification(`Updated ${application.name} success.`);
    });
  }

  deleteApplication(application: Application) {
    return this.applicationsService.delete(application.id).subscribe(() => {
      this.loadApplications();
      this.notify.notification(`Deleted ${application.name} success.`);
    });
  }
}
