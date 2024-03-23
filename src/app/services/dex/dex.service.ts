import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { AccountLiquidityPoolModel } from '../../models/account-liquidity-pool.model';
import { Observable, Subject } from 'rxjs';
import { web3FromAddress } from '@polkadot/extension-dapp';
import { LiquidityPoolModel } from '../../models/liquidity-pool.model';
import { AssetPairsModel } from '../../models/assets.model';

@Injectable({
  providedIn: 'root'
})
export class DexService {

  constructor(
    private appSettings: AppSettings,
    private httpClient: HttpClient
  ) { }

  wsProvider = new WsProvider(this.appSettings.wsProviderEndpoint);
  api = ApiPromise.create({ provider: this.wsProvider });
  keypair = this.appSettings.keypair;

  defaultApiEndpoint: string = this.appSettings.apiEndpoint;
  options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  public getLiquidityPools(): Observable<LiquidityPoolModel[] | string> {
    return new Observable<LiquidityPoolModel[]>((observer) => {
      let liquidityPools: LiquidityPoolModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/dex/get/liquidity-pools', this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              let assetPairs: AssetPairsModel = {
                assetX: results[i].assetPairs.assetX,
                assetY: results[i].assetPairs.assetY,
              }

              liquidityPools.push({
                assetPairs: assetPairs,
                assetXBalance: results[i].assetXBalance,
                assetYBalance: results[i].assetYBalance,
                lpToken: results[i].lpToken
              });
            }
          }

          observer.next(liquidityPools);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      )
    });
  }

  public getLiquidityPool(assetX: number, assetY: number): Observable<LiquidityPoolModel | string> {
    return new Observable<LiquidityPoolModel>((observer) => {
      let liquidityPool: LiquidityPoolModel = new LiquidityPoolModel();

      this.httpClient.get(this.defaultApiEndpoint + '/api/dex/get/liquidity-pool/' + assetX + '/' + assetY, this.options).subscribe(
        response => {
          let results: any = response;

          let assetPairs: AssetPairsModel = {
            assetX: results.assetPairs.assetX,
            assetY: results.assetPairs.assetY,
          }

          liquidityPool = {
            assetPairs: assetPairs,
            assetXBalance: results.assetXBalance,
            assetYBalance: results.assetYBalance,
            lpToken: results.lpToken
          };

          observer.next(liquidityPool);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      )
    });
  }

  public getAccountLiquidityPools(): Observable<AccountLiquidityPoolModel[] | string> {
    return new Observable<AccountLiquidityPoolModel[]>((observer) => {
      let accountLiquidityPools: AccountLiquidityPoolModel[] = [];

      this.httpClient.get(this.defaultApiEndpoint + '/api/dex/get/account-liquidity-pool-by-account/' + this.keypair, this.options).subscribe(
        response => {
          let results: any = response;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              accountLiquidityPools.push({
                index: results[i].index,
                accountId: results[i].accountId,
                assetPairs: results[i].assetPairs,
                assetXBalance: results[i].assetXBalance,
                assetYBalance: results[i].assetYBalance,
                lpToken: results[i].lpToken,
                lpTokenBalance: results[i].lpTokenBalance,
                priceRatio: results[i].priceRatio,
              });
            }
          }

          observer.next(accountLiquidityPools);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      )
    });
  }

  public createLiquidityPoolExtrinsic(assetX: number, assetXBalance: number, assetY: number, assetYBalance: number): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        assetX: assetX,
        assetXBalance: assetXBalance,
        assetY: assetY,
        assetYBalance: assetYBalance
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/dex/extrinsic/create-liquidity-pool", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      );
    });
  }

  public provideLiquidityExtrinsic(assetX: number, assetXBalance: number, assetY: number, assetYBalance: number): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        assetX: assetX,
        assetXBalance: assetXBalance,
        assetY: assetY,
        assetYBalance: assetYBalance
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/dex/extrinsic/provide-liquidity", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      );
    });
  }

  public redeemLiquidityExtrinsic(assetX: number, assetY: number, lpToken: number): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        assetX: assetX,
        assetY: assetY,
        lpToken: lpToken
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/dex/extrinsic/redeem-liquidity", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      );
    });
  }

  public swapExactInForOutExtrinsic(assetExactIn: number, assetExactInBalance: number, assetMaxOut: number): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        assetExactIn: assetExactIn,
        assetExactInBalance: assetExactInBalance,
        assetMaxOut: assetMaxOut
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/dex/extrinsic/swap-exact-in-for-out", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      );
    });
  }

  public swapInForExactOutExtrinsic(assetExactOut: number, assetExactOutBalance: number, assetMinIn: number): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        assetExactOut: assetExactOut,
        assetExactOutBalance: assetExactOutBalance,
        assetMinIn: assetMinIn
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/dex/extrinsic/swap-in-for-exact-out", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      );
    });
  }

  public async signExtrinsics(extrinsics: string): Promise<any> {
    const api = await this.api;

    const injector = await web3FromAddress(this.keypair);
    api.setSigner(injector.signer);

    const unsignedExtrinsics = api.tx(extrinsics);
    let signedExtrinsics = (await unsignedExtrinsics.signAsync(this.keypair)).toHex();

    if (signedExtrinsics) {
      return signedExtrinsics;
    }
  }

  public executeExtrinsics(signedExtrinsics: string): Observable<any> {
    return new Observable<any>((observer) => {
      let data = {
        signedExtrincs: signedExtrinsics
      }

      this.httpClient.post(this.defaultApiEndpoint + "/api/dex/extrinsics/execute", JSON.stringify(data), this.options).subscribe(
        response => {
          let results: any = response;

          observer.next(results);
          observer.complete();
        },
        error => {
          if (error.status == 0) {
            observer.error(error.message);
          } else {
            observer.error(error['error'].message);
          }

          observer.complete();
        }
      );
    });
  }
}
