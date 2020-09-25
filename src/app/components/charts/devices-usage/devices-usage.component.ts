import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-usage',
  templateUrl: './devices-usage.component.html',
  styleUrls: ['./devices-usage.component.css']
})
export class DevicesUsageComponent implements OnInit {

  options: EChartOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color: ['#003366', '#006699', '#4cabce', '#e5323e', '#e5323e', '#e5323e', '#e5323e'],
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        data: ['App Android Mobile', 'App Android STB', 'Browser PC', 'Browser Smart TV', 'Browser Android', 'Browser iPad', 'Browser iPhone']
    },
    series: [
        {
            name: 'total',
            type: 'bar',
            data: [
              { value: 138, itemStyle: { color: 'blue'}},
              { value: 82, itemStyle: { color: 'red'}},
              { value: 53, itemStyle: { color: 'green'}},
              { value: 40, itemStyle: { color: 'cyan'}},
              { value: 32, itemStyle: { color: 'magenta'}},
              { value: 21, itemStyle: { color: 'gray'}},
              { value: 10, itemStyle: { color: 'brown'}},
            ],
        },
    ]
};

  constructor() { }

  ngOnInit(): void {
  }

}
