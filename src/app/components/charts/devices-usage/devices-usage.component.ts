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
            data: [138, 82, 53, 8, 7, 5, 2]
        },
    ]
};

  constructor() { }

  ngOnInit(): void {
  }

}
