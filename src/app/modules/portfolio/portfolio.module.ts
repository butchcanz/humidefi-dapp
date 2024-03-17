import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';

import { SafePipe } from './../../pipes/safe.pipe';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortfolioRoutingModule,
    BreadcrumbModule,
    CardModule,
    PanelModule,
    ChipModule,
    TableModule,
  ],
  providers: [
    DecimalPipe
  ]
})
export class PortfolioModule { }
