import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.css']
})
export class TotalUsersComponent implements OnInit {

  options: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: 'Rango horario {b}, {c} {a} totales',
    },
    xAxis: {
      type: 'category',
      name: 'Hora',
      boundaryGap: false,
      data: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12']
    },
    yAxis: {
        type: 'value',
        name: 'Total de usuarios'
    },
    series: [{
        name: 'Rangos horarios',
        data: [125, 100, 90, 85, 80, 75, 70, 80, 86, 92, 102, 130],
        type: 'line',
        areaStyle: {}
    }]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
