import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AssetModel, SelectedAssetModel } from '../../models/assets.model';
import { AssetsService } from '../../services/assets/assets.service';
import { DecimalPipe } from '@angular/common';
import { DexService } from '../../services/dex/dex.service';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})
export class TransferComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    public decimalPipe: DecimalPipe,
    private assetsService: AssetsService,
    private dexService: DexService
  ) { }

  keypair = localStorage.getItem("wallet-keypair") || "";

  assets: AssetModel[] = [];
  selectedAsset: AssetModel | undefined;

  assetSourceBalance: SelectedAssetModel | undefined;
  assetType: string = "";

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public selectAssetOnChange(event: any): void {
    if (this.selectedAsset != undefined) {
      this.getAssetSourceBalanceByAccount(
        this.selectedAsset?.metadata.asset_id,
      );
    }
  }

  public getAssets(): void {
    this.assetsService.getAssets().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          this.assets = data;

          this.selectedAsset = this.assets[0];
        }

        if (this.selectedAsset != undefined) {
          this.getAssetSourceBalanceByAccount(
            this.selectedAsset?.metadata.asset_id,
          );
        }
      }
    )
  }

  public getAssetDetail(asset_id: number): AssetModel {
    let asset: AssetModel = new AssetModel();
    if (this.assets.length > 0) {
      asset = this.assets.filter(d => d.metadata.asset_id == asset_id)[0];
    }

    return asset;
  }

  public getAssetSourceBalanceByAccount(asset_source: number): void {
    this.assetsService.getAssetBalanceByAccount(asset_source, this.keypair).subscribe(
      balance => {
        this.assetSourceBalance = {
          asset: this.getAssetDetail(asset_source),
          balance: balance
        }
        // this.liquidityData.assetX = this.assetSourceBalance.asset;
        this.selectedAsset = this.assetSourceBalance.asset;
      }
    );
  }

  public signAndSendExtrinsics(data: any): void {
    this.dexService.signExtrinsics(data).then(
      (signedExtrinsics: any) => {
        this.showProcessModal = true;

        this.dexService.executeExtrinsics(signedExtrinsics).subscribe(
          results => {
            this.executionExtrinsicsStatus = {
              message: results.message,
              isError: results.isError
            }
          }
        );
      }
    );
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Portfolio' },
      { label: 'Transfer' }
    ];

    this.getAssets();
  }
}
