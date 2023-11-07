import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { BarChartComponent } from '../../components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../components/charts/line-chart/line-chart.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, BarChartComponent, LineChartComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
