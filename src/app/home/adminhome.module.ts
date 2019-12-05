import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeComponent } from './adminhome.component';
import { SharedModule } from '../shared/shared.module';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {GraphCardAdminComponent} from './video-card/graph-card-admin.component';
import {AdminHomeRoutingModule} from './admin-home-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [AdminHomeComponent, GraphCardAdminComponent],
  imports: [
    CommonModule,
    AdminHomeRoutingModule,
    SharedModule,
    NgxYoutubePlayerModule,
    NgxEchartsModule
  ]
})
export class AdminHomeModule { }
