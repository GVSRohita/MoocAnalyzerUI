import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginModule' },
  { path: 'MoreInfo', loadChildren: './more-info/more-info.module#MoreInfoModule' },
  { path: 'AboutUs', loadChildren: './about-us/about-us.module#AboutUsModule' },
  { path: 'Home', loadChildren: './home/home.module#HomeModule' },
  { path: 'AnalysisReport', loadChildren: './analysis-report/analysis-report.module#AnalysisReportModule' },
  { path: '', redirectTo: 'Register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
