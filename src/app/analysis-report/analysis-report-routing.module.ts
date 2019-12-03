import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisReportComponent } from './analysis-report.component';

const routes: Routes = [
  { path: '', component: AnalysisReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisReportRoutingModule { }
