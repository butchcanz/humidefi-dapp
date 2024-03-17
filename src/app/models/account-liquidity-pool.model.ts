import { AssetPairsModel } from "./assets.model";

export class AccountLiquidityPoolModel {
    index: number = 0;
    accountId: number = 0;
    assetPairs: AssetPairsModel = new AssetPairsModel();
    assetXBalance: number = 0;
    assetYBalance: number = 0;
    lpToken: number = 0;
    lpTokenBalance: number = 0;
    priceRatio: number = 0;
}