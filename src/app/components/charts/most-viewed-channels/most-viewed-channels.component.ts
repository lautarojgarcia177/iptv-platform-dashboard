import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-viewed-channels',
  templateUrl: './most-viewed-channels.component.html',
  styleUrls: ['./most-viewed-channels.component.css']
})
export class MostViewedChannelsComponent implements OnInit {

  data = [
    { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'El trece', startTime: '11:00', duration: 119, users: 104},
    { image: 'https://nebuladev.qvixsolutions.com/img//channels/2_20200526130759.png', name: 'Canal 13', startTime: '12:00', duration: 59, users: 70},
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628173607.png', name: 'América', startTime: '11:00', duration: 149, users: 70},
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175059.png', name: 'ESPN', startTime: '9:00', duration: 269, users: 60},
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175301.png', name: 'Telefe', startTime: '12:00', duration: 59, users: 55},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
