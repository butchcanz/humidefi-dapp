import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssetsModule } from '../assets/assets.module';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LiquidityRoutingModule } from './liquidity-routing.module';
import { LiquidityComponent } from './liquidity.component';

@NgModule({
  declarations: [
    LiquidityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AssetsModule,
    LiquidityRoutingModule,
    BreadcrumbModule,
    ToolbarModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    IconFieldModule,
    InputIconModule,
    InputNumberModule,
    PanelModule,
    CardModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule
  ],
  providers: [
    DecimalPipe
  ]
})
export class LiquidityModule { }
