import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserAssetModel } from '../../models/user-asset.model';
import { AssetsService } from '../../services/assets/assets.service';
import { DecimalPipe } from '@angular/common';
import { AssetModel } from '../../models/assets.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    public decimalPipe: DecimalPipe,
    private assetsService: AssetsService
  ) { }

  walletName = localStorage.getItem("wallet-meta-name") || "";
  address = localStorage.getItem("wallet-address") || "";
  keypair = localStorage.getItem("wallet-keypair") || "";

  showChangeWalletModal: boolean = false;

  iframeSrc = "";
  userAssets: UserAssetModel[] = [];

  public getAssets(): void {
    this.assetsService.getAssets().subscribe(
      async result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            await this.getAssetBalanceByAcccount(data[i]);
          }
        }
      }
    )
  }

  public async getAssetBalanceByAcccount(asset: AssetModel): Promise<void> {
    this.assetsService.getAssetBalanceByAccount(asset.metadata.asset_id, this.keypair).subscribe(
      balance => {
        this.userAssets.push({
          asset_id: asset.metadata.asset_id,
          asset_symbol: asset.metadata.symbol,
          asset_name: asset.metadata.name,
          asset_balance: balance
        });
      }
    );
  }

  public changeWallet(): void {
    this.showChangeWalletModal = true;
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Portfolio' }
    ];

    let url = location.origin + "/polkadot-identicon";
    this.iframeSrc = url;

    this.getAssets();
  }
}
