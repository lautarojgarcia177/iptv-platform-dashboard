import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-visualization',
  templateUrl: './device-visualization.component.html',
  styleUrls: ['./device-visualization.component.css']
})
export class DeviceVisualizationComponent implements OnInit {

  options: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}</br>{a}</br> {c} Usuarios',
    },
    legend: {
      data: ['App Android STB', 'App Android Mobile', 'Browser PC', 'Browser iPad']
    },
    xAxis: {
      type: 'category',
      name: 'Hora',
      boundaryGap: false,
      data: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24']
    },
    yAxis: {
        type: 'value',
        name: 'Total de usuarios'
    },
    series: [
      {
        name: 'App Android STB',
        data: [125, 100, 70, 75, 80, 75, 70, 80, 86, 92, 102, 130, 50, 45, 90, 85, 30, 15, 16, 10, 5, 4, 12, 40],
        type: 'line',
        stack: 'App Android STB',
      },
      {
        name: 'App Android Mobile',
        data: [50, 20, 90, 85, 30, 15, 16, 20, 35, 34, 32, 40, 100, 90, 70, 20, 25, 15, 11, 12, 11, 9, 2, 8],
        type: 'line',
        stack: 'App Android Mobile',
      },
      {
        name: 'Browser PC',
        data: [60, 70, 70, 50, 40, 40, 31, 32, 31, 29, 32, 28, 20, 25, 30, 15, 10, 5, 1, 2, 3, 5, 6, 17],
        type: 'line',
        stack: 'Browser PC'
      },
      {
        name: 'Browser iPad',
        data: [20, 25, 30, 15, 10, 5, 1, 2, 3, 5, 6, 17, 20, 20, 30, 20, 10, 10, 11, 12, 11, 9, 4, 8],
        type: 'line',
        stack: 'Browser iPad'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
