import { Component } from '@angular/core';

@Component({
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Applications';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'applications', icon: 'view_list', title: 'Applications' },
  ];
}
