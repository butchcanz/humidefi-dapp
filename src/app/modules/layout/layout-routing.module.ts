import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/app/portfolio', pathMatch: 'full' },
      { path: 'portfolio', loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule) },
      { path: 'staking', loadChildren: () => import('../staking/staking.module').then(m => m.StakingModule) },
      { path: 'liquidity', loadChildren: () => import('../liquidity/liquidity.module').then(m => m.LiquidityModule) },
      { path: 'swap', loadChildren: () => import('../swap/swap.module').then(m => m.SwapModule) },
      { path: 'transfer', loadChildren: () => import('../transfer/transfer.module').then(m => m.TransferModule) },
      { path: 'buy-sell', loadChildren: () => import('../buy-sell/buy-sell.module').then(m => m.BuySellModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
