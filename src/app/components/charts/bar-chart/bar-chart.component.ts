import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  chart: any;
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart
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
            data: ['467', '576', '572', '79', '92', '574', '386', '576'],
            backgroundColor: '#66AFEF',
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        responsive: true,
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
