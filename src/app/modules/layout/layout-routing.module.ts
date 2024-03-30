import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      // { path: 'portfolio', loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule) },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'liquidity', loadChildren: () => import('../liquidity/liquidity.module').then(m => m.LiquidityModule) },
      { path: 'swap', loadChildren: () => import('../swap/swap.module').then(m => m.SwapModule) },
      { path: 'transfer', loadChildren: () => import('../transfer/transfer.module').then(m => m.TransferModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
