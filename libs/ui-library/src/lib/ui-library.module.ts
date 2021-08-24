import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildComponent } from './wild/wild.component';
import {MaterialModule} from '@projects/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [
    LoginComponent,
    ToolbarComponent,
    WildComponent
  ],
  exports: [WildComponent, ToolbarComponent, LoginComponent]
})
export class UiLibraryModule {}
