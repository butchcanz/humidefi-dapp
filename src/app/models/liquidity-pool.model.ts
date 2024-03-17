import { AssetModel, AssetPairsModel } from "./assets.model";

export class LiquidityDataModel {
    assetX: AssetModel = new AssetModel();
    assetXBalance: number = 0;
    assetY: AssetModel = new AssetModel();
    assetYBalance: number = 0;
}

export class LiquidityPoolModel {
    assetPairs: AssetPairsModel = new AssetPairsModel();
    assetXBalance: number = 0;
    assetYBalance: number = 0;
    lpToken: number = 0;
}
