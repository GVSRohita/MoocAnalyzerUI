import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbInputModule, NbAccordionModule } from '@nebular/theme';
import { BkMultipleAxisChartModule } from '@uibakery/kit';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbAccordionModule,
    BkMultipleAxisChartModule
  ],
  exports: [NbCardModule, NbButtonModule, NbIconModule, NbInputModule, NbAccordionModule, BkMultipleAxisChartModule]
})
export class SharedModule { }
