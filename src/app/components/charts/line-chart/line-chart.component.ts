import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent {
  chart: any;
  createChart() {
    this.chart = new Chart('line-chart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Januari',
          'Februari',
          'Maret',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Agustus',
        ],
        datasets: [
          {
            label: 'Posts',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: '#66AFEF',
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
