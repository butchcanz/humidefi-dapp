import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { AssetsComponent } from './assets.component';
import { ListAssetsComponent } from './list-assets/list-assets.component';

@NgModule({
  declarations: [
    AssetsComponent,
    ListAssetsComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    ListAssetsComponent
  ]
})
export class AssetsModule { }
