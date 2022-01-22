import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getDataProduct(productKey: string) {
    const data = localStorage.getItem(productKey);

    if (data) {
      return JSON.parse(data);
    }
  }

  setDataProduct(productKey: string, data: string | object) {
    localStorage.setItem(productKey, JSON.stringify(data));
  }
}
