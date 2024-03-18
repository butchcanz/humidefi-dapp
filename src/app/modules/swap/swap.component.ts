import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AssetModel, SelectedAssetModel } from '../../models/assets.model';
import { AssetsService } from '../../services/assets/assets.service';
import { DecimalPipe } from '@angular/common';
import { DexService } from '../../services/dex/dex.service';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrl: './swap.component.scss'
})
export class SwapComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    public decimalPipe: DecimalPipe,
    private assetsService: AssetsService,
    private dexService: DexService
  ) { }

  keypair = localStorage.getItem("wallet-keypair") || "";

  assets: AssetModel[] = [];
  selectedAssetX: AssetModel | undefined;
  selectedAssetY: AssetModel | undefined;

  assetXBalances: SelectedAssetModel | undefined;
  assetYBalances: SelectedAssetModel | undefined;
  assetType: string = "";

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public selectAssetOnChange(event: any): void {
    if (this.selectedAssetX != undefined && this.selectedAssetY != undefined) {
      this.getAssetsXYBalancesByAccount(
        this.selectedAssetX?.metadata.asset_id,
        this.selectedAssetY?.metadata.asset_id,
      );
    }
  }

  public getAssets(): void {
    this.assetsService.getAssets().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          this.assets = data;

          this.selectedAssetX = this.assets[0];
          this.selectedAssetY = this.assets[1];
        }

        if (this.selectedAssetX != undefined && this.selectedAssetY != undefined) {
          this.getAssetsXYBalancesByAccount(
            this.selectedAssetX?.metadata.asset_id,
            this.selectedAssetY?.metadata.asset_id,
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

  public getAssetsXYBalancesByAccount(asset_x: number, asset_y: number): void {
    this.assetsService.getAssetBalanceByAccount(asset_x, this.keypair).subscribe(
      balance => {
        this.assetXBalances = {
          asset: this.getAssetDetail(asset_x),
          balance: balance
        }
        // this.liquidityData.assetX = this.assetXBalances.asset;
        this.selectedAssetX = this.assetXBalances.asset;
      }
    );

    this.assetsService.getAssetBalanceByAccount(asset_y, this.keypair).subscribe(
      balance => {
        this.assetYBalances = {
          asset: this.getAssetDetail(asset_y),
          balance: balance
        }
        // this.liquidityData.assetY = this.assetYBalances.asset;
        this.selectedAssetY = this.assetYBalances.asset;
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

  public switchToken(): void {
    let selectedAssetX = this.selectedAssetX;
    let selectedAssetY = this.selectedAssetY;

    this.selectedAssetX = selectedAssetY;
    this.selectedAssetY = selectedAssetX;

    if (this.selectedAssetX != undefined && this.selectedAssetY != undefined) {
      this.getAssetsXYBalancesByAccount(
        this.selectedAssetX?.metadata.asset_id,
        this.selectedAssetY?.metadata.asset_id,
      );
    }
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Portfolio' },
      { label: 'Swap' }
    ];

    this.getAssets();
  }
}
