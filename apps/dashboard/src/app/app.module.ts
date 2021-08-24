import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@projects/material';
import { CoreDataModule } from '@projects/core-data';
import { CoreStateModule } from '@projects/core-state';
import { UiLibraryModule } from '@projects/ui-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationsListComponent } from './applications/applications-list/applications-list.component';
import { ApplicationDetailsComponent } from './applications/application-details/application-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    ApplicationsListComponent,
    ApplicationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
