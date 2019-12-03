import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreInfoRoutingModule } from './more-info-routing.module';
import { MoreInfoComponent } from './more-info.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { Accordion1Component } from './accordion1/accordion1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MoreInfoComponent, InfoCardComponent, Accordion1Component],
  imports: [
    CommonModule,
    MoreInfoRoutingModule,
    SharedModule
  ]
})
export class MoreInfoModule { }
