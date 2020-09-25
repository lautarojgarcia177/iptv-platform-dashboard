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
      formatter: '{a}  <br/>{b} : {c}',
    },
    xAxis: {
        type: 'category',
        name: 'hora',
        boundaryGap: false,
        data: ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12']
    },
    yAxis: {
        type: 'usuarios',
        name: 'usuarios'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320, 12, 12, 12, 12, 12],
        type: 'line',
        areaStyle: {}
    }]
};

// options: EChartOption = {
//   xAxis: {
//       type: 'category',
//       boundaryGap: false,
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//       type: 'value'
//   },
//   series: [{
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line',
//       areaStyle: {}
//   }]
// };

  constructor() { }

  ngOnInit(): void {
  }

}
