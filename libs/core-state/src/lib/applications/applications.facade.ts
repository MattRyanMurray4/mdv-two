import { Injectable } from '@angular/core';
import { Application } from '@projects/api-interfaces';
import { ApplicationsService, NotifyService } from '@projects/core-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ApplicationsFacade {
  private _allApplicationsSource$ = new BehaviorSubject<Application[]>([]);
  allApplications$: Observable<Application[]> =
    this._allApplicationsSource$.asObservable();
  private _selectedApplicationSource$ = new BehaviorSubject<Application>(
    {} as Application
  );
  selectedApplication$: Observable<Application> =
    this._selectedApplicationSource$.asObservable();

  constructor(
    private applicationsService: ApplicationsService,
    private notify: NotifyService
  ) {}

  loadApplications() {
    this.applicationsService
      .all()
      .pipe(
        tap((applications) => this._allApplicationsSource$.next(applications)),
        take(1)
      )
      .subscribe();
  }

  selectApplication(applicationId: string) {
    return this.applicationsService
      .find(applicationId)
      .pipe(
        tap((applicationId) =>
          this._selectedApplicationSource$.next(applicationId)
        ),
        take(1)
      )
      .subscribe(() => {
        this.loadApplications();
      });
  }

  createApplication(application: Application) {
    return this.applicationsService
      .create(application)
      .pipe(
        tap((application) =>
          this._selectedApplicationSource$.next(application)
        ),
        take(1)
      )
      .subscribe(() => {
        this.loadApplications();
        this.notify.notification(`Created ${application.name} success.`);
      });
  }

  updateApplication(application: Application) {
    return this.applicationsService
      .update(application)
      .pipe(
        tap((application) =>
          this._selectedApplicationSource$.next(application)
        ),
        take(1)
      )
      .subscribe(() => {
        this.loadApplications();
        this.notify.notification(`Updated ${application.name} success.`);
      });
  }

  deleteApplication(application: Application) {
    return this.applicationsService
      .delete(application)
      .pipe(
        tap((application) =>
          this._selectedApplicationSource$.next(application)
        ),
        take(1)
      )
      .subscribe(() => {
        this.loadApplications();
        this.notify.notification(`Deleted ${application.name} success.`);
      });
  }
}
