import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisReportRoutingModule } from './analysis-report-routing.module';
import { AnalysisReportComponent } from './analysis-report.component';
import { GraphCardComponent } from './graph-card/graph-card.component';
import { SharedModule } from '../shared/shared.module';
import {BkLineChartModule} from '@uibakery/kit';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [AnalysisReportComponent, GraphCardComponent],
  imports: [
    CommonModule,
    AnalysisReportRoutingModule,
    SharedModule,
    BkLineChartModule,
    NgxEchartsModule
  ]
})
export class AnalysisReportModule { }
