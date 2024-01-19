import { Injectable } from '@angular/core';

export interface CategoryMetadata {
  displayName: string;
  variableName: string;
  url: string;
}

export enum CategoryName {
  ACCESSORY = 'accessory',
  LAMP = 'lamp',
  CHAIR = 'chair',
  DESK = 'desk',
  STORAGE = 'storage',
  FOOT_REST = 'footRest',
  STAND = 'stand',
  DESK_ACCESSORY = 'deskAccessory',
}

@Injectable({
  providedIn: 'root',
})
export class CategoryMetadataService {
  ITEM_MAP: Map<CategoryName, CategoryMetadata> = new Map([
    [
      CategoryName.ACCESSORY,
      {
        displayName: 'Accessory',
        url: 'https://www.ikea.com.hk/en/products/workspace-accessories',
        variableName: CategoryName.ACCESSORY,
      },
    ],
    [
      CategoryName.LAMP,
      {
        displayName: 'Lamp',
        url: 'https://www.ikea.com.hk/en/products/workspace-lighting',
        variableName: CategoryName.LAMP,
      },
    ],
    [
      CategoryName.CHAIR,
      {
        displayName: 'Chair',
        url: 'https://www.ikea.com.hk/en/products/work-chairs',
        variableName: CategoryName.CHAIR,
      },
    ],
    [
      CategoryName.DESK,
      {
        displayName: 'Desk',
        url: 'https://www.ikea.com.hk/en/products/work-desks',
        variableName: CategoryName.DESK,
      },
    ],
    [
      CategoryName.STORAGE,
      {
        displayName: 'Storage',
        placeholder: 'ALEX',
        url: 'https://www.ikea.com.hk/en/products/office-storage-furniture',
        variableName: CategoryName.STORAGE,
      },
    ],
    [
      CategoryName.FOOT_REST,
      {
        displayName: 'Foot Rest',
        url: 'https://www.ikea.com.hk/en/search?q=footrest',
        variableName: CategoryName.FOOT_REST,
      },
    ],
    [
      CategoryName.STAND,
      {
        displayName: 'Stand',
        placeholder: 'ELLOVEN',
        url: 'https://www.ikea.com.hk/en/search?q=monitor+stand',
        variableName: CategoryName.STAND,
      },
    ],
    [
      CategoryName.DESK_ACCESSORY,
      {
        displayName: 'Desk Accessory',
        variableName: CategoryName.DESK_ACCESSORY,
        url: 'https://www.ikea.com.hk/en/products/workspace-accessories/desks-accessories',
      },
    ],
  ]);

  getDisplayName(variableName: CategoryName) {
    const metadata = this.ITEM_MAP.get(variableName);
    if (!metadata) {
      throw new Error(`No display name for variable by name ${variableName}`);
    }
    return metadata.displayName;
  }

  getVariableName(variableName: CategoryName) {
    const metadata = this.ITEM_MAP.get(variableName);
    if (!metadata) {
      throw new Error(`No variable name variable by name ${variableName}`);
    }
    return metadata.variableName;
  }
}
