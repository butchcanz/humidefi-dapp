import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakingRoutingModule } from './staking-routing.module';
import { StakingComponent } from './staking.component';


@NgModule({
  declarations: [
    StakingComponent
  ],
  imports: [
    CommonModule,
    StakingRoutingModule
  ]
})
export class StakingModule { }
