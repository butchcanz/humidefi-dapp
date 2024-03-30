import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { UserAssetModel } from '../../models/user-asset.model';
import { AssetsService } from '../../services/assets/assets.service';
import { DecimalPipe } from '@angular/common';
import { AssetModel } from '../../models/assets.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [MessageService]
})
export class DashboardComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;
  currency: any[] | undefined;


  constructor(
    public decimalPipe: DecimalPipe,
    private messageService: MessageService,
    private assetsService: AssetsService
  ) { }

  selectedCurrency: string | undefined;

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
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
      }
    )
  }

  public selectCurrencyOnChange(event: any): void {

  }

  public async getAssetBalanceByAcccount(asset: AssetModel): Promise<void> {
    this.assetsService.getAssetBalanceByAccount(asset.metadata.asset_id, this.keypair).subscribe(
      result => {
        let data: any = result;
        this.userAssets.push({
          asset_id: asset.metadata.asset_id,
          asset_symbol: asset.metadata.symbol,
          asset_name: asset.metadata.name,
          asset_balance: data,
          asset_quantity: data,
          asset_amount: data,
          asset_value: data

        });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
      }
    );
  }

  public changeWallet(): void {
    this.showChangeWalletModal = true;
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Dashboard' }
    ];

    this.currency = [
       { name: 'Dollar', code: 'USD'}, 
       {name: 'Phillipines', code: 'PHP'}
      ]
    let url = location.origin + "/polkadot-identicon";
    this.iframeSrc = url;

    this.getAssets();
  }
}
