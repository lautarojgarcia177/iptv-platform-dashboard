import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-platform',
  templateUrl: './user-platform.component.html',
  styleUrls: ['./user-platform.component.css']
})
export class UserPlatformComponent {

  options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['App Android Mobile', 'Browser PC', 'App Android STB'],
    },
    series: [
      {
        name: 'Dispositivo',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        animation: false,
        data: [
          { value: 1, name: 'App Android Mobile' },
          { value: 7, name: 'Browser PC' },
          { value: 58, name: 'App Android STB' },
        ],
      },
    ],
  };

}