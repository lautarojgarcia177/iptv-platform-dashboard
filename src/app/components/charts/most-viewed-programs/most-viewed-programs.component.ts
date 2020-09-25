import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-viewed-programs',
  templateUrl: './most-viewed-programs.component.html',
  styleUrls: ['./most-viewed-programs.component.css']
})
export class MostViewedProgramsComponent implements OnInit {

  data = [
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175059.png', name: 'CONMEBOL Libertadores', startTime: '21:00', duration: 149, users: 64},
    { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Cantando 2020', startTime: '12:00', duration: 59, users: 7},
    { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Noticiero 13', startTime: '11:00', duration: 149, users: 7},
    { image: 'https://nebuladev.qvixsolutions.com/img/channels/1_20170628175301.png', name: 'Jesús', startTime: '9:00', duration: 269, users: 6},
    { image: 'https://nebuladev.qvixsolutions.com/img//channels/105_20170621181235.png', name: 'Los ángeles de la mañana', startTime: '12:00', duration: 59, users: 5},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
