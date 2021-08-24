import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsFacade } from './applications/applications.facade';

@NgModule({
  imports: [CommonModule],
  providers: [ApplicationsFacade],
})
export class CoreStateModule {}
