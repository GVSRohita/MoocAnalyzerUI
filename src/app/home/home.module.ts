import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { SharedModule } from '../shared/shared.module';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';

@NgModule({
  declarations: [HomeComponent, VideoCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxYoutubePlayerModule
  ]
})
export class HomeModule { }
