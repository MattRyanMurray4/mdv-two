import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '@projects/api-interfaces';
import { mapTo } from 'rxjs/operators';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  private model = 'applications';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Application[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Application>(this.getUrlById(id));
  }

  create(application: Application) {
    return this.httpClient.post<Application>(this.getUrl(), application);
  }

  update(application: Application) {
    return this.httpClient.patch<Application>(
      this.getUrlById(application.id),
      application
    );
  }

  delete(application: Application) {
    return this.httpClient
      .delete<Application>(this.getUrlById(application.id))
      .pipe(mapTo(application));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
