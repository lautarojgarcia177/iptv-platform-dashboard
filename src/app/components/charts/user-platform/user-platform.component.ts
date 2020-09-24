import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-platform',
  templateUrl: './user-platform.component.html',
  styleUrls: ['./user-platform.component.css']
})
export class UserPlatformComponent {

  @Input() title = 'Cantidad de usuarios conectados';

  single = [
    {
      name: 'App Android Mobile',
      value: 1
    },
    {
      name: 'Browser PC',
      value: 7
    },
    {
      name: 'App Android STB',
      value: 58
    },
  ];

  // options
  showLabels = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() {
    Object.assign(this);
  }

}