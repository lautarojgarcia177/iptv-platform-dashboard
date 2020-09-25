import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-viewed-channels-now',
  templateUrl: './most-viewed-channels-now.component.html',
  styleUrls: ['./most-viewed-channels-now.component.css']
})
export class MostViewedChannelsNowComponent implements OnInit {

  data = [
    { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Los ángeles de la mañana', startTime: '11:00', duration: 119, users: 14},
    { image: 'https://nebuladev.qvixsolutions.com/img//channels/2_20200526130759.png', name: 'Canal 13 La Rioja', startTime: '12:00', duration: 59, users: 7},
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628173607.png', name: 'Informados de todo', startTime: '11:00', duration: 149, users: 7},
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175059.png', name: 'SportsCenter - Mediadía', startTime: '9:00', duration: 269, users: 6},
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175301.png', name: '30 años juntos: Avenida Brasil', startTime: '12:00', duration: 59, users: 5},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
