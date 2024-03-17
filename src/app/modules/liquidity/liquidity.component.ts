import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AssetModel, SelectedAssetModel } from '../../models/assets.model';
import { AssetsService } from '../../services/assets/assets.service';
import { DecimalPipe } from '@angular/common';
import { DexService } from '../../services/dex/dex.service';
import { LiquidityDataModel, LiquidityPoolModel } from '../../models/liquidity-pool.model';
import { AccountLiquidityPoolModel } from '../../models/account-liquidity-pool.model';
import { ExecuteExtrinsicsStatusModel } from '../../models/execution-extrinsics-status.model';

@Component({
  selector: 'app-liquidity',
  templateUrl: './liquidity.component.html',
  styleUrl: './liquidity.component.scss'
})
export class LiquidityComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    public decimalPipe: DecimalPipe,
    private assetsService: AssetsService,
    private dexService: DexService
  ) { }

  keypair = localStorage.getItem("wallet-keypair") || "";

  showLiquidityFormModal: boolean = false;
  showExistingLiquidityPoolsModal: boolean = false;

  liquidityData: LiquidityDataModel = new LiquidityDataModel();

  showAssetsModal: boolean = false;
  selectedAssetX: SelectedAssetModel | undefined;
  selectedAssetY: SelectedAssetModel | undefined;
  selectedAssetType: string = "";

  existingLiquidityPools: LiquidityPoolModel[] = [];
  selectedExistingLiquidityPool: LiquidityPoolModel | undefined;
  isForNewLiquidityPool: boolean = true;

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  accountLiquidityPools: AccountLiquidityPoolModel[] = [];
  assets: AssetModel[] = [];

  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public openLiquidityFormModal(): void {
    this.showLiquidityFormModal = true;
    this.selectedAssetX = undefined;
    this.selectedAssetY = undefined;
    this.selectedAssetType = "";

    this.isForNewLiquidityPool = true;
  }

  public openExistingLiquidityPoolsModal(): void {
    this.showExistingLiquidityPoolsModal = true;
    this.getLiquidityPools();
  }

  public openLiquidityFormModalFromSelectedLiquidityPool(selectedExistingLiquidityPool: LiquidityPoolModel | undefined): void {
    this.showLiquidityFormModal = true;
    this.isForNewLiquidityPool = false;

    if (selectedExistingLiquidityPool != undefined) {
      this.assetsService.getAssetBalanceByAccount(selectedExistingLiquidityPool.assetPairs.assetX, this.keypair).subscribe(
        balance => {
          this.selectedAssetX = {
            asset: this.getAssetDetail(selectedExistingLiquidityPool.assetPairs.assetX),
            balance: balance
          }
          this.liquidityData.assetX = this.selectedAssetX.asset;
        }
      );

      this.assetsService.getAssetBalanceByAccount(selectedExistingLiquidityPool.assetPairs.assetY, this.keypair).subscribe(
        balance => {
          this.selectedAssetY = {
            asset: this.getAssetDetail(selectedExistingLiquidityPool.assetPairs.assetY),
            balance: balance
          }
          this.liquidityData.assetY = this.selectedAssetY.asset;
        }
      );
    }
  }

  public getSelectedAsset(data: AssetModel): void {
    this.assetsService.getAssetBalanceByAccount(data.metadata.asset_id, this.keypair).subscribe(
      balance => {
        if (this.selectedAssetType == "assetX") {
          this.selectedAssetX = {
            asset: data,
            balance: balance
          }
          this.liquidityData.assetX = this.selectedAssetX.asset;
        }

        if (this.selectedAssetType == "assetY") {
          this.selectedAssetY = {
            asset: data,
            balance: balance
          }
          this.liquidityData.assetY = this.selectedAssetY.asset;
        }

        this.showAssetsModal = false;
      }
    );
  }

  public createLiquidityPoolExtrinsic(): void {
    this.showProcessModal = true;

    if (this.isForNewLiquidityPool) {
      this.dexService.createLiquidityPoolExtrinsic(
        this.liquidityData.assetX.metadata.asset_id,
        this.liquidityData.assetXBalance,
        this.liquidityData.assetY.metadata.asset_id,
        this.liquidityData.assetYBalance
      ).subscribe(
        result => {
          let data: any = result;
          this.signAndSendExtrinsics(data);
        }
      );
    } else {
      this.provideLiquidityExtrinsic();
    }
  }

  public provideLiquidityExtrinsic(): void {
    this.dexService.provideLiquidityExtrinsic(
      this.liquidityData.assetX.metadata.asset_id,
      this.liquidityData.assetXBalance,
      this.liquidityData.assetY.metadata.asset_id,
      this.liquidityData.assetYBalance
    ).subscribe(
      result => {
        let data: any = result;
        this.signAndSendExtrinsics(data);
      }
    );
  }

  public signAndSendExtrinsics(data: any): void {
    this.dexService.signExtrinsics(data).then(
      (signedExtrinsics: any) => {
        this.dexService.executeExtrinsics(signedExtrinsics).subscribe(
          results => {
            this.executionExtrinsicsStatus = {
              message: results.message,
              isError: results.isError
            }

            this.showLiquidityFormModal = false;
            this.showExistingLiquidityPoolsModal = false;

            this.getAccountLiquidityPools();
          }
        );
      }
    );
  }

  public openSelectAssetModal(selectedToken: string): void {
    if (this.isForNewLiquidityPool == true) {
      this.showAssetsModal = true;
      this.selectedAssetType = selectedToken;
    }
  }

  public getAssets(): void {
    this.assetsService.getAssets().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          this.assets = data;
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

  public getAccountLiquidityPools(): void {
    this.accountLiquidityPools = [];
    this.dexService.getAccountLiquidityPools().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.accountLiquidityPools.push({
              index: data[i].index,
              accountId: data[i].accountId,
              assetPairs: data[i].assetPairs,
              assetXBalance: data[i].assetXBalance,
              assetYBalance: data[i].assetYBalance,
              lpToken: data[i].lpToken,
              lpTokenBalance: data[i].lpTokenBalance,
              priceRatio: data[i].priceRatio
            });
          }
        }

        this.accountLiquidityPools.sort((a, b) => (a.index < b.index ? -1 : 1));
        this.getAssets();
      }
    )
  }

  public getLiquidityPools(): void {
    this.existingLiquidityPools = [];
    this.dexService.getLiquidityPools().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            this.existingLiquidityPools.push({
              assetPairs: data[i].assetPairs,
              assetXBalance: data[i].assetXBalance,
              assetYBalance: data[i].assetYBalance,
              lpToken: data[i].lpToken
            });
          }
        }
      }
    )
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Portfolio' },
      { label: 'Liquidity' },
    ];

    this.getAccountLiquidityPools();
  }
}
