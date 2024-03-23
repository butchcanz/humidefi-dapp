import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
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
  styleUrl: './liquidity.component.scss',
  providers: [MessageService]
})
export class LiquidityComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  constructor(
    public decimalPipe: DecimalPipe,
    private messageService: MessageService,
    private assetsService: AssetsService,
    private dexService: DexService
  ) { }

  keypair = localStorage.getItem("wallet-keypair") || "";

  showLiquidityFormModal: boolean = false;
  liquidityData: LiquidityDataModel = new LiquidityDataModel();

  assets: AssetModel[] = [];
  selectedAssetX: AssetModel | undefined;
  selectedAssetY: AssetModel | undefined;

  assetXBalances: SelectedAssetModel | undefined;
  assetYBalances: SelectedAssetModel | undefined;
  assetType: string = "";

  showExistingLiquidityPoolsModal: boolean = false;
  existingLiquidityPools: LiquidityPoolModel[] = [];
  selectedExistingLiquidityPool: LiquidityPoolModel | undefined;
  isForNewLiquidityPool: boolean = true;

  showProcessModal: boolean = false;
  isProcessing: boolean = false;

  accountLiquidityPools: AccountLiquidityPoolModel[] = [];
  executionExtrinsicsStatus: ExecuteExtrinsicsStatusModel | undefined;

  public openLiquidityFormModal(): void {
    this.showLiquidityFormModal = true;
    this.isForNewLiquidityPool = true;

    this.liquidityData = new LiquidityDataModel();

    if (this.selectedAssetX != undefined && this.selectedAssetY != undefined) {
      this.getAssetsXYBalancesByAccount(
        this.selectedAssetX?.metadata.asset_id,
        this.selectedAssetY?.metadata.asset_id,
      );
    }
  }

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

        this.getAccountLiquidityPools();
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
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
      result => {
        let data: any = result;
        this.assetXBalances = {
          asset: this.getAssetDetail(asset_x),
          balance: data
        }
        this.liquidityData.assetX = this.assetXBalances.asset;
        this.selectedAssetX = this.assetXBalances.asset;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
      }
    );

    this.assetsService.getAssetBalanceByAccount(asset_y, this.keypair).subscribe(
      result => {
        let data: any = result;
        this.assetYBalances = {
          asset: this.getAssetDetail(asset_y),
          balance: data
        }
        this.liquidityData.assetY = this.assetYBalances.asset;
        this.selectedAssetY = this.assetYBalances.asset;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
      }
    );
  }

  public openExistingLiquidityPoolsModal(): void {
    this.showExistingLiquidityPoolsModal = true;
    this.getLiquidityPools();
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
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
      }
    )
  }

  public openLiquidityFormModalFromSelectedLiquidityPool(selectedExistingLiquidityPool: LiquidityPoolModel | undefined): void {
    this.showLiquidityFormModal = true;
    this.isForNewLiquidityPool = false;

    this.liquidityData = new LiquidityDataModel();

    if (selectedExistingLiquidityPool != undefined) {
      this.getAssetsXYBalancesByAccount(
        selectedExistingLiquidityPool.assetPairs.assetX,
        selectedExistingLiquidityPool.assetPairs.assetY
      );
    }
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
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
      }
    )
  }

  public createLiquidityPoolExtrinsic(): void {
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
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
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
        this.showProcessModal = true;

        this.dexService.executeExtrinsics(signedExtrinsics).subscribe(
          results => {
            this.executionExtrinsicsStatus = {
              message: results.message,
              isError: results.isError
            }

            this.showLiquidityFormModal = false;
            this.showExistingLiquidityPoolsModal = false;

            this.getAccountLiquidityPools();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
            this.showProcessModal = false;
          }
        );
      }
    );
  }

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Portfolio' },
      { label: 'Liquidity' },
    ];

    this.getAssets();
  }
}
