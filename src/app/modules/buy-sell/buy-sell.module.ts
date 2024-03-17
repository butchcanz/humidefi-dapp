import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySellRoutingModule } from './buy-sell-routing.module';
import { BuySellComponent } from './buy-sell.component';


@NgModule({
  declarations: [
    BuySellComponent
  ],
  imports: [
    CommonModule,
    BuySellRoutingModule
  ]
})
export class BuySellModule { }
