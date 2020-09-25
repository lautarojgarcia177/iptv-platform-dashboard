import { Component, Input } from '@angular/core';
import { multi } from './data';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-channels-views',
  templateUrl: './channels-views.component.html',
  styleUrls: ['./channels-views.component.css']
})
export class ChannelsViewsComponent {

  @Input() title = 'Total de usuarios por hora';

  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      }
    ],
  }

  // multi: any[];
  // view: any[] = [700, 300];

  // // options
  // legend: boolean = true;
  // showLabels: boolean = true;
  // animations: boolean = true;
  // xAxis: boolean = true;
  // yAxis: boolean = true;
  // showYAxisLabel: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Year';
  // yAxisLabel: string = 'Population';
  // timeline: boolean = true;

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  // };

  // constructor() {
  //   Object.assign(this, { multi });
  // }

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }
}
