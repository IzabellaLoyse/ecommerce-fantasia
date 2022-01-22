import { TestBed } from '@angular/core/testing';

import { ProductsStoreServicesService } from './products-store-services.service';

describe('ProductsStoreServicesService', () => {
  let service: ProductsStoreServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsStoreServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
