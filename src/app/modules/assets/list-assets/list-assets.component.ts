import { Component } from '@angular/core';
import { AssetModel } from '../../../models/assets.model';
import { AssetsService } from '../../../services/assets/assets.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-assets',
  templateUrl: './list-assets.component.html',
  styleUrl: './list-assets.component.scss'
})
export class ListAssetsComponent {
  @Output() getSelectedAsset = new EventEmitter<AssetModel>();

  constructor(
    private assetsService: AssetsService
  ) { }

  listAssets: AssetModel[] = [];
  selectedAsset!: AssetModel;

  public getAssets(): void {
    this.assetsService.getAssets().subscribe(
      result => {
        let data: any = result;
        if (data.length > 0) {
          this.listAssets = data;
        }
      }
    )
  }

  public listAssetsOnRowSelect(event: any) {
    let data = event.data;
    this.getSelectedAsset.emit(data);
  }

  ngOnInit() {
    this.getAssets();
  }
}
